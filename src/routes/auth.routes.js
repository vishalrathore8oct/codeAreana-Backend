import { Router } from "express";
import {
  registerUser,
  verifyEmail,
  resendVerificationEmail,
  loginUser,
  logoutUser,
  getUserProfile,
  refreshAccessToken,
  forgotPassword,
  resetPassword,
} from "../controllers/auth.controllers.js";
import {
  userRegisterValidator,
  verifyEmailValidator,
  resendVerificationEmailValidator,
  userLoginValidator,
  forgotPasswordValidator,
  resetPasswordValidator,
} from "../validators/auth.validators.js";
import { validateRequest } from "../middlewares/validator.middlewares.js";
import { isLoggedIn } from "../middlewares/auth.middleware.js";

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

userAuthRouter.post("/logout", isLoggedIn, logoutUser);

userAuthRouter.get("/user-profile", isLoggedIn, getUserProfile);

userAuthRouter.post("/refresh-access-token", refreshAccessToken);

userAuthRouter.post(
  "/forgot-password",
  forgotPasswordValidator(),
  validateRequest,
  forgotPassword,
);

userAuthRouter.post(
  "/reset-password",
  resetPasswordValidator(),
  validateRequest,
  resetPassword,
);

export default userAuthRouter;
