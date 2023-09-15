import HttpStatus from "../config/constants/HttpStatus.js";
import ResponseObject from "./ResponseObject.js";

class PaginatedResponseObject extends ResponseObject {
  payload;

  constructor(status = HttpStatus.HTTP_200_OK) {
    super(status);
  }
}

export default PaginatedResponseObject;