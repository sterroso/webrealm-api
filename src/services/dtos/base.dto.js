export default class BaseDTO {
  static TRANSFORMATION_FORMATS = {
    LIST_ITEM: "list item",
    LEAN: "lean",
    DETAILED: "detailed",
    CREATE: "create",
    UPDATE: "update"
  }
  
  static transform(data, format = BaseDTO.TRANSFORMATION_FORMATS.LIST_ITEM) {
    throw new Error("BaseDTO Error: Method not implemented.");
  }
}