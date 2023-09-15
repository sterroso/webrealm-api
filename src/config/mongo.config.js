/******************************************************************************
 *  MongoDB configuration file.
 *****************************************************************************/

import dotenv from "dotenv";

dotenv.config();

const MongoConfig = {
  MONGODB_URI: process.env.MONGODB_URI,
}

export default MongoConfig;