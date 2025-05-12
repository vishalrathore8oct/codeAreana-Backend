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

/**
 * @swagger
 * /api/v1/auth/register:
 *   post:
 *     summary: Register a new user
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               fullName:
 *                 type: string
 *                 example: Vishal Rathore
 *               userName:
 *                 type: string
 *                 example: vishalrathore
 *               email:
 *                 type: string
 *                 example: vishal.rathore@example.com
 *               password:
 *                 type: string
 *                 example: Password123!
 *     responses:
 *       201:
 *         description: User registered successfully
 *       400:
 *         description: User with this email or username already exists
 */
userAuthRouter.post(
  "/register",
  userRegisterValidator(),
  validateRequest,
  registerUser,
);

/**
 * @swagger
 * /api/v1/auth/verify-email:
 *   get:
 *     summary: Verify user email
 *     tags:
 *       - Authentication
 *     parameters:
 *       - in: query
 *         name: token
 *         required: true
 *         schema:
 *           type: string
 *         description: Email verification token
 *     responses:
 *       200:
 *         description: Email verified successfully
 *       400:
 *         description: Invalid or expired token
 */
userAuthRouter.get(
  "/verify-email",
  verifyEmailValidator(),
  validateRequest,
  verifyEmail,
);

/**
 * @swagger
 * /api/v1/auth/resend-verification-email:
 *   post:
 *     summary: Resend email verification link
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: vishal.rathore@example.com
 *     responses:
 *       200:
 *         description: Verification email resent successfully
 *       400:
 *         description: User not found or already verified
 */
userAuthRouter.post(
  "/resend-verification-email",
  resendVerificationEmailValidator(),
  validateRequest,
  resendVerificationEmail,
);

/**
 * @swagger
 * /api/v1/auth/login:
 *   post:
 *     summary: Login a user
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: vishal.rathore@example.com
 *               password:
 *                 type: string
 *                 example: Password123!
 *     responses:
 *       200:
 *         description: User logged in successfully
 *       400:
 *         description: Invalid email or password
 *       403:
 *         description: Email not verified
 */
userAuthRouter.post("/login", userLoginValidator(), validateRequest, loginUser);

/**
 * @swagger
 * /api/v1/auth/logout:
 *   post:
 *     summary: Logout a user
 *     tags:
 *       - Authentication
 *     responses:
 *       200:
 *         description: User logged out successfully
 *       401:
 *         description: Unauthorized! No user data found
 *       404:
 *         description: User not found
 */
userAuthRouter.post("/logout", isLoggedIn, logoutUser);

/**
 * @swagger
 * /api/v1/auth/user-profile:
 *   get:
 *     summary: Get user profile
 *     tags:
 *       - Authentication
 *     responses:
 *       200:
 *         description: User profile fetched successfully
 *       401:
 *         description: Unauthorized! No user data found
 *       404:
 *         description: User not found
 */
userAuthRouter.get("/user-profile", isLoggedIn, getUserProfile);

/**
 * @swagger
 * /api/v1/auth/refresh-access-token:
 *   post:
 *     summary: Refresh access token
 *     tags:
 *       - Authentication
 *     responses:
 *       200:
 *         description: Access token refreshed successfully
 *       401:
 *         description: No refresh token found
 *       403:
 *         description: Refresh token is invalid or has expired
 */
userAuthRouter.post("/refresh-access-token", refreshAccessToken);

/**
 * @swagger
 * /api/v1/auth/forgot-password:
 *   post:
 *     summary: Send password reset email
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: vishal.rathore@example.com
 *     responses:
 *       200:
 *         description: Password reset link sent successfully
 *       404:
 *         description: User with this email doesn't exist
 */
userAuthRouter.post(
  "/forgot-password",
  forgotPasswordValidator(),
  validateRequest,
  forgotPassword,
);

/**
 * @swagger
 * /api/v1/auth/reset-password:
 *   post:
 *     summary: Reset user password
 *     tags:
 *       - Authentication
 *     parameters:
 *       - in: query
 *         name: token
 *         required: true
 *         schema:
 *           type: string
 *         description: Password reset token
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               password:
 *                 type: string
 *                 example: NewPassword123!
 *     responses:
 *       200:
 *         description: Password reset successfully
 *       400:
 *         description: Invalid or expired token
 */
userAuthRouter.post(
  "/reset-password",
  resetPasswordValidator(),
  validateRequest,
  resetPassword,
);

export default userAuthRouter;
