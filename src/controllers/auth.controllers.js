import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { prisma } from "../config/prismaClient.js";
import bcrypt from "bcryptjs";
import crypto from "crypto";
import {
  generateAccessToken,
  generateRefreshToken,
} from "../utils/generateJwtTokens.js";
import {
  sendEmail,
  emailVerificationMailgenContent,
} from "../services/sendMail.service.js";

export const registerUser = asyncHandler(async (req, res) => {
  const { fullName, userName, email, password } = req.body;

  const userExists = await prisma.user.findFirst({
    where: {
      OR: [{ email }, { userName }],
    },
  });

  if (userExists) {
    throw new ApiError(400, "User with this email or username already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const emailVerificationToken = crypto.randomBytes(32).toString("hex");
  const emailVerificationTokenExpiry = new Date(Date.now() + 30 * 60 * 1000); // 30 minutes

  const emailVerificationUrl = `${process.env.FRONTEND_URL}/verify-email?token=${emailVerificationToken}`;

  const user = await prisma.user.create({
    data: {
      fullName,
      userName,
      email,
      password: hashedPassword,
      emailVerificationToken,
      emailVerificationTokenExpiry,
    },
  });

  await sendEmail({
    toEmail: email,
    subject: "Verify your email",
    mailgenContent: emailVerificationMailgenContent(
      userName,
      emailVerificationUrl,
    ),
  });

  const accessToken = generateAccessToken(user);
  const refreshToken = generateRefreshToken(user);

  await prisma.user.update({
    where: { id: user.id },
    data: { refreshToken },
  });

  res.cookie("accessToken", accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 60 * 60 * 1000, // 60 minutes
  });

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 14 * 24 * 60 * 60 * 1000, // 14 days
  });

  res.status(201).json(
    new ApiResponse(201, "User registered successfully", {
      user: {
        id: user.id,
        fullName: user.fullName,
        userName: user.userName,
        email: user.email,
        role: user.userRole,
        isVerified: user.isVerified,
        profilePicture: user.profilePicture,
      },
      accessToken,
      refreshToken,
    }),
  );
});

export const verifyEmail = asyncHandler(async (req, res) => {
  const { token } = req.query;

  const user = await prisma.user.findFirst({
    where: {
      emailVerificationToken: token,
      emailVerificationTokenExpiry: {
        gte: new Date(),
      },
    },
  });

  if (!user) {
    throw new ApiError(400, "Invalid or expired token");
  }

  await prisma.user.update({
    where: { id: user.id },
    data: {
      isEmailVerified: true,
      emailVerificationToken: null,
      emailVerificationTokenExpiry: null,
    },
  });

  res.status(200).json(new ApiResponse(200, "Email verified successfully"));
});

export const resendVerificationEmail = asyncHandler(async (req, res) => {
  const { email } = req.body;

  const user = await prisma.user.findFirst({
    where: {
      email,
      isEmailVerified: false,
    },
  });

  if (!user) {
    throw new ApiError(400, "User not found or already verified");
  }

  const emailVerificationToken = crypto.randomBytes(32).toString("hex");
  const emailVerificationTokenExpiry = new Date(Date.now() + 30 * 60 * 1000); // 30 minutes

  const emailVerificationUrl = `${process.env.FRONTEND_URL}/verify-email?token=${emailVerificationToken}`;

  await prisma.user.update({
    where: { id: user.id },
    data: {
      emailVerificationToken,
      emailVerificationTokenExpiry,
    },
  });

  await sendEmail({
    toEmail: email,
    subject: "Verify your email",
    mailgenContent: emailVerificationMailgenContent(
      user.userName,
      emailVerificationUrl,
    ),
  });

  res
    .status(200)
    .json(new ApiResponse(200, "Verification email resent successfully"));
});
