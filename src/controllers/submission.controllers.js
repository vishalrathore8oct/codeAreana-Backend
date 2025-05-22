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

export const getUserSubmissionsForProblem = asyncHandler(async (req, res) => {
  const userId = req.user.id;
  const problemId = req.params.problemId;

  const submissions = await prisma.submission.findMany({
    where: {
      userId: userId,
      problemId: problemId,
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

export const getSubmissionCountForProblem = asyncHandler(async (req, res) => {
  const problemId = req.params.problemId;

  const submissionCount = await prisma.submission.count({
    where: {
      problemId: problemId,
    },
  });

  if (submissionCount === 0) {
    return ApiResponse.error(
      res,
      new ApiError(404, "No submissions found for this user"),
    );
  }
  res
    .status(200)
    .json(
      new ApiResponse(
        200,
        "Submissions count fetched successfully",
        submissionCount,
      ),
    );
});
