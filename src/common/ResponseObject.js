import HttpStatus from "../config/constants/HttpStatus.js";

class ResponseObject {
  status;
  error;
  payload;

  constructor(status = HttpStatus.HTTP_200_OK) {
    this.status = status;
  }

  toJSON() {
    return {
      status: `${this.status.toString()}`,
      error: this.error ? `${this.error.message}` : undefined,
      payload: { ...this.payload }
    }
  }

  toString() {
    return this.toJSON().toString();
  }
}

export default ResponseObject;