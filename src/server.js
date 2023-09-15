import app from "./app.js";
import AppConfig from "./config/app.config.js";
import MongoConfig from "./config/mongo.config.js";
import MongoDBConnection from "./config/mongodb.connection.js";
import logger from "./utils/logger.js";

const PORT = AppConfig.PORT;

const db = new MongoDBConnection(MongoConfig.MONGODB_URI);

const server = app.listen(PORT, (err) => {
  if (err) {
    logger.error(err.message);
  }

  logger.info(`Server up and listening on port ${PORT}! 🚀`);
});

server.on("error", (error) => {
  logger.error("Unexpected server error! 🛑");
});