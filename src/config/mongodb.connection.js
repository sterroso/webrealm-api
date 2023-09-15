import mongoose from "mongoose";

import logger from "../utils/logger.js";

class Database {
  #connection_string;

  constructor(connection_string) {
    this.#connection_string = connection_string;
    this.connect();
  }

  get connection_string() {
    return this.#connection_string;
  }

  async connect() {
    mongoose.connect(
      this.connection_string,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    )
    .then(() => {
      logger.info("MongoDB Connection open 🍃");
    })
    .catch((error) => {
      logger.error("MongoDB could not be connected!");
      logger.error(error.message);
    });
  }
}

export default Database;