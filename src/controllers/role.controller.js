import { RoleService } from "../services/index.js";
import ResponseObject from "../common/ResponseObject.js";
import PaginatedResponseObject from "../common/PaginatedResponseObject.js";
import HttpStatus from "../config/constants/HttpStatus.js";
import logger from "../utils/logger.js";

export const getRoles = async (req, res) => {
  const resObject = new PaginatedResponseObject(HttpStatus.HTTP_200_OK);

  const query = {};

  const options = {};

  try {
    resObject.payload = await RoleService.getMany(query, options);
  } catch (error) {
    resObject.status = HttpStatus.HTTP_500_INTERNAL_SERVER_ERROR;
    resObject.error = error;
    logger.error(error.message);
  }

  res.status(resObject.status.code).json(resObject.toJSON()).end();
}

export const getRoleById = async (req, res) => {
  const resObject = new ResponseObject(HttpStatus.HTTP_200_OK);

  const { roleId } = req.params;

  try {
    resObject.payload = await RoleService.getById(roleId);
  } catch (error) {
    resObject.status = HttpStatus.HTTP_500_INTERNAL_SERVER_ERROR;
    resObject.error = error;
    logger.error(error.message);
  }

  res.status(resObject.status.code).json(resObject.toJSON()).end();
}

export const createRole = async (req, res) => {
  const resObject = new ResponseObject(HttpStatus.HTTP_201_CREATED);

  const { body } = req;

  try {
    resObject.payload = await RoleService.create(body);
  } catch (error) {
    resObject.status = HttpStatus.HTTP_500_INTERNAL_SERVER_ERROR;
    resObject.error = error;
    logger.error(error.message);
  }

  res.status(resObject.status.code).json(resObject.toJSON).end();
}

export const updateRoleById = async (req, res) => {
  const resObject = new ResponseObject(HttpStatus.HTTP_200_OK);

  const { roleId } = req.params;

  const { body } = req;

  try {
    resObject.payload = await RoleService.updateById(roleId, body);
  } catch (error) {
    resObject.status = HttpStatus.HTTP_500_INTERNAL_SERVER_ERROR;
    resObject.error = error;
    logger.error(error.message);
  }

  res.status(resObject.status.code).json(resObject.toJSON()).end();
}

export const deleteRoleById = async (req, res) => {
  const resObject = new ResponseObject(HttpStatus.HTTP_204_NO_CONTENT);

  const { roleId } = req.params;

  try {
    resObject.payload = await RoleService.deleteById(roleId);
  } catch (error) {
    resObject.status = HttpStatus.HTTP_500_INTERNAL_SERVER_ERROR;
    resObject.error = error;
    logger.error(error.message);
  }

  res.status(resObject.status.code).json(resObject.toJSON()).end();
}
