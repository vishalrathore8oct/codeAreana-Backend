import { Router } from "express";
import {
  registerUser,
  verifyEmail,
  resendVerificationEmail,
} from "../controllers/auth.controllers.js";
import {
  userRegisterValidator,
  verifyEmailValidator,
  resendVerificationEmailValidator,
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

userAuthRouter.post(
  "/resend-verification-email",
  resendVerificationEmailValidator(),
  validateRequest,
  resendVerificationEmail,
);

export default userAuthRouter;
