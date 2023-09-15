/******************************************************************************
 *  Application configuration file.
 *****************************************************************************/

import dotenv from "dotenv";

dotenv.config();
 
const AppConfig = {
  PORT: process?.env?.APP_PORT || 3000,
  SECRET_KEY: process.env.SECRET_KEY,
}

export default AppConfig;