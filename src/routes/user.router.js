import { Router } from "express";

import * as UserController from "../controllers/user.controller.js";

const router = Router();

router.get("/", UserController.getUsers);

router.get("/:userId", UserController.getUserById);

router.post("/", UserController.createUser);

router.put("/:userId", UserController.updateUserById);

router.patch("/:userId", UserController.updateUserById);

router.delete("/:userId", UserController.deleteUserById);

export default router;