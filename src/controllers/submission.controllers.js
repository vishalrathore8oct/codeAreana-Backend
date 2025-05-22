/* eslint-disable */

import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { prisma } from "../config/prismaClient.js";

export const getAllUserSubmissions = asyncHandler(async (req, res) => {});

export const getUserSubmissionsForProblem = asyncHandler(
  async (req, res) => {},
);

export const getSubmissionCountForProblem = asyncHandler(
  async (req, res) => {},
);
