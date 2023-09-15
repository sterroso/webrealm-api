import BaseDTO from "./base.dto.js";

export default class RoleDTO extends BaseDTO {
  static transform(data, format = BaseDTO.TRANSFORMATION_FORMATS.LIST_ITEM) {
    switch (format) {
      case BaseDTO.TRANSFORMATION_FORMATS.LIST_ITEM:
        return {
          id: data._id,
          name: data.name,
        }
      case BaseDTO.TRANSFORMATION_FORMATS.LEAN:
        return {
          id: data._id,
          name: data.name,
          permissions: data?.permissions || undefined,
        }
      case BaseDTO.TRANSFORMATION_FORMATS.DETAILED:
        return {
          id: data._id,
          name: data.name,
          permissions: data?.permissions || undefined,
          isBuiltin: data.isBuiltin,
        }
      case BaseDTO.TRANSFORMATION_FORMATS.CREATE:
        return {
          name: data.name,
          permissions: data?.permissions || undefined,
        }
      case BaseDTO.TRANSFORMATION_FORMATS.UPDATE:
        return {
          name: data?.name || undefined,
          permissions: data?.permissions || undefined,
        }
      default:
        throw new Error("RoleDTO Error: transformation format not implemented.");
    }
  }

  static getListItem = (data) => RoleDTO.transform(data, BaseDTO.TRANSFORMATION_FORMATS.LIST_ITEM);

  static getLean = (data) => RoleDTO.transform(data, BaseDTO.TRANSFORMATION_FORMATS.LEAN);

  static getDetailed = (data) => RoleDTO.transform(data, BaseDTO.TRANSFORMATION_FORMATS.DETAILED);

  static getCreate = (data) => RoleDTO.transform(data, BaseDTO.TRANSFORMATION_FORMATS.CREATE);

  static getUpdate = (data) => RoleDTO.transform(data, BaseDTO.TRANSFORMATION_FORMATS.UPDATE);
}
