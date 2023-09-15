import { UserService } from "../services/index.js";
import HttpStatus from "../config/constants/HttpStatus.js";
import ResponseObject from "../common/ResponseObject.js";
import PaginatedResponseObject from "../common/PaginatedResponseObject.js"
import logger from "../utils/logger.js";

export const getUsers = async (req, res) => {
  const resObj = new PaginatedResponseObject(HttpStatus.HTTP_200_OK);

  const query = {};

  const options = {};

  try {
    const users = await UserService.getMany(query, options);

    resObj.payload = users;
  } catch (error) {
    resObj.status = HttpStatus.HTTP_500_INTERNAL_SERVER_ERROR;
    resObj.error = error;
    logger.error(error.message);
  }

  res.status(resObj.status.code).json(resObj.toJSON()).end();
};

export const getUserById = async (req, res) => {
  const resObj = new ResponseObject(HttpStatus.HTTP_200_OK);

  const { userId } = req.params;

  try {
    const user = await UserService.getById(userId);

    if (!user) {
      resObj.status = HttpStatus.HTTP_404_NOT_FOUND;
      resObj.error = new Error(`No user with id ${userId} was found.`);
    } else {
      resObj.payload = user;
    }
  } catch (error) {
    resObj.status = HttpStatus.HTTP_500_INTERNAL_SERVER_ERROR;
    resObj.error = error;
    logger.error(error.message);
  }

  res.status(resObj.status.code).json(resObj.toJSON()).end();
};

export const createUser = async (req, res) => {
  const resObj = new ResponseObject(HttpStatus.HTTP_201_CREATED);

  const { body } = req;

  try {
    const newUser = await UserService.create(body);

    if (!newUser) {
      resObj.status = HttpStatus.HTTP_400_BAD_REQUEST;
      resObj.error = new Error(`User could not be created with the provided data: ${body}`);
    } else {
      resObj.payload = newUser;
    }
  } catch (error) {
    resObj.status = HttpStatus.HTTP_500_INTERNAL_SERVER_ERROR;
    resObj.error = error;
    logger.error(error.message);
  }

  res.status(resObj.status.code).json(resObj.toJSON()).end();
};

export const updateUserById = async (req, res) => {
  const resObj = new ResponseObject(HttpStatus.HTTP_200_OK);

  const { userId } = req.params;

  const { body } = req;

  try {
    const user = await UserService.updateById(userId, body);

    if (!user) {
      resObj.status = HttpStatus.HTTP_400_BAD_REQUEST;
      resObj.error = new Error(`User with id ${userId} could not be updated wit provided data: ${body}`);
    } else {
      resObj.payload = user;
    }
  } catch (error) {
    resObj.status = HttpStatus.HTTP_500_INTERNAL_SERVER_ERROR;
    resObj.error = error;
    logger.error(error.message);
  }

  res.status(resObj.status.code).json(resObj.toJSON()).end();
};

export const deleteUserById = async (req, res) => {
  const resObj = new ResponseObject(HttpStatus.HTTP_202_ACCEPTED);

  const { userId } = req.params;

  try {
    const confirmation = await UserService.deleteById(userId);

    if (!confirmation) {
      resObj.status = HttpStatus.HTTP_400_BAD_REQUEST;
      resObj.error = new Error(`User with id ${userId} could not be deleted.`);
    } else {
      resObj.payload = confirmation;
    }
  } catch (error) {
    resObj.status = HttpStatus.HTTP_500_INTERNAL_SERVER_ERROR;
    ResponseObject.error = error;
    logger.error(error.message);
  }

  res.status(resObj.status.code).json(resObj.toJSON()).end();
};
