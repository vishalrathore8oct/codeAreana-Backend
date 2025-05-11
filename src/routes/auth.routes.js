import { Router } from "express";
import { registerUser, verifyEmail } from "../controllers/auth.controllers.js";
import {
  userRegisterValidator,
  verifyEmailValidator,
} from "../validators/auth.validators.js";
import { validateRequest } from "../middlewares/validator.middlewares.js";

const userAuthRouter = Router();

userAuthRouter.post(
  "/register",
  userRegisterValidator(),
  validateRequest,
  registerUser,
);

userAuthRouter.get(
  "/verify-email",
  verifyEmailValidator(),
  validateRequest,
  verifyEmail,
);

export default userAuthRouter;
