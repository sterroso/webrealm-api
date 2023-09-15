import { createLogger, format, transports } from "winston";

const logger = createLogger({
  transports: [
    new transports.Console({
      level: "debug",
      format: format.combine(
        format.simple()
      ),
    }),
    new transports.File({
      level: "error",
      maxsize: 5 * 1024 * 1024,
      maxFiles: 5,
      filename: `./public/logs/api.error.log`
    }),
  ]
});

export default logger;