import BaseRepository from "./repositories/BaseRepository.js";
import UserRepository from "./repositories/UserRepository.js";

import Role from "../models/mongodb/role.mongodb.model.js";

import RoleDTO from "./dtos/role.dto.js";

const RoleService = new BaseRepository(Role, RoleDTO);

export { 
  RoleService,
  UserRepository as UserService,
};
