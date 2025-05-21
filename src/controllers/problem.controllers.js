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
      return res
        .status(400)
        .json(new ApiError(400, `Language ${language} is not Supported`));
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
        return res
          .status(400)
          .json(
            new ApiError(
              400,
              `Testcase ${i + 1} failed for languae ${language} for Status Id ${submission.status_id}`,
            ),
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
    return res.status(400).json(new ApiError(400, "Problem not created"));
  }

  res
    .status(201)
    .json(new ApiResponse(201, "Problem created successfully", newProblem));
});

export const getAllProblems = asyncHandler(async (req, res) => {
  const problems = await prisma.problem.findMany();

  if (!problems) {
    res.status(400).json(new ApiError(400, "Problems not found from database"));
  }

  res
    .status(200)
    .json(new ApiResponse(200, "Problems fetched successfully", problems));
});
