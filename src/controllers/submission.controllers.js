/* eslint-disable */

import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { prisma } from "../config/prismaClient.js";

export const getAllUserSubmissions = asyncHandler(async (req, res) => {
  const userId = req.user.id;
  const submissions = await prisma.submission.findMany({
    where: {
      userId: userId,
    },
  });
  if (!submissions) {
    return ApiResponse.error(
      res,
      new ApiError(404, "No submissions found for this user"),
    );
  }
  res
    .status(200)
    .json(
      new ApiResponse(200, "Submissions fetched successfully", submissions),
    );
});

export const getUserSubmissionsForProblem = asyncHandler(
  async (req, res) => {},
);

export const getSubmissionCountForProblem = asyncHandler(
  async (req, res) => {},
);
