import { Router } from "express";
import {
  registerUser,
  verifyEmail,
  resendVerificationEmail,
  loginUser,
} from "../controllers/auth.controllers.js";
import {
  userRegisterValidator,
  verifyEmailValidator,
  resendVerificationEmailValidator,
  userLoginValidator,
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

userAuthRouter.post("/login", userLoginValidator(), validateRequest, loginUser);

export default userAuthRouter;
