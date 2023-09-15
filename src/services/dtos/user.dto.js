import BaseDTO from "./base.dto.js";

export default class UserDTO extends BaseDTO {
  static TRANSFORMATION_FORMATS = {
    ...BaseDTO.TRANSFORMATION_FORMATS,
    UPDATE_EMAIL: "update_email",
    UPDATE_PASSWORD: "update_password",
  }

  static transform(data, format = UserDTO.TRANSFORMATION_FORMATS.LIST_ITEM) {
    switch(format) {
      case BaseDTO.TRANSFORMATION_FORMATS.LIST_ITEM:
        return {
          id: data._id,
          user: `${data.firstName}${data?.middleName || false ? data.middleName : " "}${data.lastName} <${data.email}>`
        }
      case BaseDTO.TRANSFORMATION_FORMATS.LEAN:
        return {
          id: data._id,
          email: data.email,
          name: `${data.firstName}${data?.middleName || false ? data.middleName : " "}${data.lastName}`,
          gender: data?.gender || undefined,
          dateOfBirth: data?.dateOfBirth || undefined,
        }
      case BaseDTO.TRANSFORMATION_FORMATS.DETAILED:
        return {
          id: data._id,
          email: data.email,
          firstName: data.firstName,
          middleName: data?.middleName || undefined,
          lastName: data.lastName,
          gender: data?.gender || undefined,
          dateOfBirth: data?.dateOfBirth || undefined,
          role: data.role,
        }
      case BaseDTO.TRANSFORMATION_FORMATS.CREATE:
        return {
          email: data?.email || undefined,
          password: data?.email || undefined,
          firstName: data?.firstName || undefined,
          middleName: data?.middleName || undefined,
          lastName: data?.lastName || undefined,
          gender: data?.gender || undefined,
          dateOfBirth: data?.dateOfBirth || undefined,
          role: data?.role || undefined,
        }
      case BaseDTO.TRANSFORMATION_FORMATS.UPDATE:
        return {
          firstName: data?.firstName || undefined,
          middleName: data?.middleName || undefined,
          lastName: data?.lastName || undefined,
          gender: data?.gender || undefined,
          dateOfBirth: data?.dateOfBirth || undefined,
          role: data?.role || undefined,
        }
      default:
    }
  }
}
