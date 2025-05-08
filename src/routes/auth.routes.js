import { Router } from "express";
import { registerUser } from "../controllers/auth.controllers.js";
import { userRegisterValidator } from "../validators/auth.validators.js";
import { validateRequest } from "../middlewares/validator.middlewares.js";

const userAuthRouter = Router();

userAuthRouter.post(
  "/register",
  userRegisterValidator(),
  validateRequest,
  registerUser,
);

export default userAuthRouter;
