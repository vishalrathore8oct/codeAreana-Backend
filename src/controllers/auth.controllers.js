/* eslint-disable no-unused-vars */
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { prisma } from "../config/prismaClient.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import { uploadOnCloudinary } from "../services/cloudinary.service.js";
import {
  sendEmail,
  emailVerificationMailgenContent,
  forgotPasswordMailgenContent,
} from "../services/sendMail.service.js";

export const registerUser = asyncHandler(async (req, res) => {
  res.status(201).json(new ApiResponse(201, "User registered successfully"));
});
