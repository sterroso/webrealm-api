import { compare } from "bcrypt"
import jwt from "jsonwebtoken";

import AppConfig from "../../config/app.config.js";
import BaseRepository from "./BaseRepository.js";
import UserModel from "../../models/mongodb/user.mongodb.model.js";
import UserDTO from "../dtos/user.dto.js";

class UserRepository extends BaseRepository {
  constructor() {
    super(UserModel, UserDTO);
  }

  async login(email, password) {
    try {
      const user = await this.model.findOne({ email: email });

      if (!user) {
        throw new Error(`No user ${email} was found.`);
      }

      return await compare(password, user.password);
    } catch (error) {
      throw new Error(`UserRepository Error: ${error}`);
    }
  }

  async getToken(email, password) {
    try {
      const user = await this.model.findOne({ email: email });

      if (!user) {
        throw new Error(`No user ${email} was found.`);
      }

      if (await compare(password, user.password)) {
        const token = {
          userId: user._id,
          email: user.email
        }

        return jwt.sign(token, AppConfig.SECRET_KEY);
      }

      return null;
    } catch (error) {
      throw new Error(`UserRepository Error: ${error}`);
    }
  }

  async can(userId, entity, operation, realm) {
    try {
      const user = await this.model.findById(userId);

      if (!user) {
        throw new Error(`User with id ${userId} not found.`);
      }

      const requestedPermission = `${entity}:${operation}:${realm}`;

      return user?.permissions.includes(requestedPermission) || false;
    } catch (error) {
      throw new Error(`UserRepository error: ${error}`);
    }
  }
}

export default new UserRepository();