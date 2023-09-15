import { Router } from "express";

import * as RoleController from "../controllers/role.controller.js";

const router = Router();

router.get("/", RoleController.getRoles);

router.get("/{roleId}", RoleController.getRoleById);

router.post("/", RoleController.createRole);

router.put("/{roleId}", RoleController.updateRoleById);

router.patch("/{roleId}", RoleController.updateRoleById);

router.delete("/{roleId}", RoleController.deleteRoleById);

export default router;
