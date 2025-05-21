import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { prisma } from "../config/prismaClient.js";
import {
  getJudge0LanguageId,
  createBatchSubmission,
  getBatchSubmissionPolling,
} from "../utils/judge0.utils.js";

export const createProblem = asyncHandler(async (req, res) => {
  const {
    title,
    description,
    difficulty,
    tags,
    hints,
    examples,
    constraints,
    editorial,
    testcases,
    codeSnippets,
    referenceSolutions,
  } = req.body;

  for (const [language, sourceCode] of Object.entries(referenceSolutions)) {
    let langageId = getJudge0LanguageId(language);

    if (!langageId) {
      throw new ApiError(400, `Language ${language} is not Supported`);
    }

    const submissions = testcases.map(({ input, output }) => {
      return {
        source_code: sourceCode,
        language_id: langageId,
        stdin: input,
        expected_output: output,
      };
    });

    const submissionsResult = await createBatchSubmission(submissions);

    const tokens = submissionsResult.map((submission) => {
      return submission.token;
    });

    const finalResult = await getBatchSubmissionPolling(tokens);

    for (let i = 0; i < finalResult.length; i++) {
      const submission = finalResult[i];

      if (submission.status_id !== 3) {
        throw new ApiError(
          400,
          `Testcase ${i + 1} failed for languae ${language} for Status Id ${submission.status_id}`,
        );
      }
    }
  }

  const newProblem = await prisma.problem.create({
    data: {
      title,
      description,
      difficulty,
      tags,
      hints,
      examples,
      constraints,
      editorial,
      testcases,
      codeSnippets,
      referenceSolutions,
      userId: req.user.userId,
    },
  });

  if (!newProblem) {
    throw new ApiError(400, "Problem not created");
  }

  res
    .status(201)
    .json(new ApiResponse(201, "Problem created successfully", newProblem));
});

export const getAllProblems = asyncHandler(async (req, res) => {
  const problems = await prisma.problem.findMany();

  if (!problems) {
    throw new ApiError(400, "No problems found");
  }

  res
    .status(200)
    .json(new ApiResponse(200, "Problems fetched successfully", problems));
});

export const getProblemById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const problem = await prisma.problem.findUnique({
    where: {
      id,
    },
  });

  if (!problem) {
    throw new ApiError(400, "Problem not found");
  }

  res
    .status(200)
    .json(new ApiResponse(200, "Problem fetched successfully", problem));
});

export const updateProblemById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const {
    title,
    description,
    difficulty,
    tags,
    hints,
    examples,
    constraints,
    editorial,
    testcases,
    codeSnippets,
    referenceSolutions,
  } = req.body;

  for (const [language, sourceCode] of Object.entries(referenceSolutions)) {
    let langageId = getJudge0LanguageId(language);

    if (!langageId) {
      throw new ApiError(400, `Language ${language} is not Supported`);
    }

    const submissions = testcases.map(({ input, output }) => {
      return {
        source_code: sourceCode,
        language_id: langageId,
        stdin: input,
        expected_output: output,
      };
    });

    const submissionsResult = await createBatchSubmission(submissions);

    const tokens = submissionsResult.map((submission) => {
      return submission.token;
    });

    const finalResult = await getBatchSubmissionPolling(tokens);

    for (let i = 0; i < finalResult.length; i++) {
      const submission = finalResult[i];

      if (submission.status_id !== 3) {
        throw new ApiError(
          400,
          `Testcase ${i + 1} failed for languae ${language} for Status Id ${submission.status_id}`,
        );
      }
    }
  }

  const problem = await prisma.problem.update({
    where: {
      id,
    },
    data: {
      title,
      description,
      difficulty,
      tags,
      hints,
      examples,
      constraints,
      editorial,
      testcases,
      codeSnippets,
      referenceSolutions,
    },
  });

  if (!problem) {
    throw new ApiError(400, "Problem not found to update");
  }

  res
    .status(200)
    .json(new ApiResponse(200, "Problem updated successfully", problem));
});

export const deleteProblemById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const problem = await prisma.problem.findUnique({
    where: {
      id,
    },
  });

  if (!problem) {
    throw new ApiError(400, "Problem not found to delete");
  }

  await prisma.problem.delete({
    where: {
      id,
    },
  });

  res.status(200).json(new ApiResponse(200, "Problem deleted successfully"));
});
