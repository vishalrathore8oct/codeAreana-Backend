/* eslint-disable */
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { prisma } from "../config/prismaClient.js";
import {
  getJudge0LanguageId,
  createBatchSubmission,
  getBatchSubmissionPolling,
} from "../utils/judge0.utils.js";

export const codeExicution = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "Code execution is working",
  });
});
