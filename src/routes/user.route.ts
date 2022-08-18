import { Router } from "express";
import createUSerController from "../controllers/createUser.controllers";
import deleteUSerController from "../controllers/deleteUser.controllers";
import editUserController from "../controllers/editUser.controller";
import listAllUserController from "../controllers/listAllUser.controller";
import listUserController from "../controllers/listUser.controller";
import errosMiddleware from "../middleware/errors.middleware";
import { existEmailMiddleware } from "../middleware/existEmail.middleware";
import { validateUserCreate } from "../middleware/validateUserCreate.middleware";
import { verifyIDMiddleware } from "../middleware/verifyID.middleware";
import { userCreateSchema } from "../schema/createUser.schema";

const user = Router()

user.post("", existEmailMiddleware, validateUserCreate(userCreateSchema), createUSerController)

user.get("", listAllUserController)

user.get("/:id", listUserController)

user.patch("/:id", editUserController)

user.delete("/:id", deleteUSerController)

export default user