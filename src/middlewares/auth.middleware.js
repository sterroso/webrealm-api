import jwt from "jsonwebtoken";

import AppConfig from "../config/app.config.js";
import ResponseObject from "../common/ResponseObject.js";
import HttpStatus from "../config/constants/HttpStatus.js";

const auth = async (req, res, next) => {
  const resObj = new ResponseObject(HttpStatus.HTTP_401_UNAUTHORIZED);

  const token = req.headers.authorization?.split(' ')[1] || 
                req.cookies.token;

  if (!token) {
    return res.
             status(HttpStatus.HTTP_401_UNAUTHORIZED.code).
             json({ error: "Unauthorized" });
  }

  try {
    const decodedToken = jwt.verify(token, AppConfig.SECRET_KEY);

    req.user = decodedToken;

    next();
  } catch (error) {
    return res.
             status(HttpStatus.HTTP_401_UNAUTHORIZED.code).
             json({ error: "Unauthorized" });
  }
}

export default auth;
