import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { prisma } from "../config/prismaClient.js";
import {
  createBatchSubmission,
  getBatchSubmissionPolling,
  getJudge0LanguageName,
} from "../utils/judge0.utils.js";

export const codeExicution = asyncHandler(async (req, res) => {
  const { sourcCode, languageId, stdin, expectedOutput, problemId } = req.body;
  const userId = req.user.userId;

  if (
    !Array.isArray(stdin) ||
    stdin.length === 0 ||
    !Array.isArray(expectedOutput) ||
    expectedOutput.length === 0 ||
    stdin.length !== expectedOutput.length
  ) {
    throw new ApiError(400, "Invalid or Missing Testcases");
  }

  const submissions = stdin.map((input, index) => {
    return {
      source_code: sourcCode,
      language_id: languageId,
      stdin: input,
      expected_output: expectedOutput[index],
    };
  });

  const submissionsResult = await createBatchSubmission(submissions);

  const tokens = submissionsResult.map((submission) => {
    return submission.token;
  });

  const finalResult = await getBatchSubmissionPolling(tokens);

  // console.log("finalResult", finalResult);

  let isAllTestcasesPassed = true;

  const detailedResults = finalResult.map((result, index) => {
    const stdout = result.stdout?.trim();
    const expected = expectedOutput[index]?.trim();
    const statusId = result.status.id;
    const isTestcasePassed = statusId === 3 && stdout === expected;

    if (!isTestcasePassed) {
      isAllTestcasesPassed = false;
    }

    return {
      testcase: index + 1,
      passed: isTestcasePassed,
      stdin: stdin[index],
      stdout: stdout,
      expectedOutput: expected,
      stderr: result.stderr || null,
      compileOutput: result.compile_output || null,
      status: result.status.description,
      memory: result.memory ? `${result.memory} KB` : null,
      time: result.time ? `${result.time} sec` : null,
    };
  });

  // console.log("detailedResults", detailedResults);

  const submission = await prisma.submission.create({
    data: {
      sourceCode: sourcCode,
      language: getJudge0LanguageName(languageId),
      stdin: stdin.join("\n"),
      stdout: JSON.stringify(detailedResults.map((result) => result.stdout)),
      stderr: detailedResults.some((result) => result.stderr)
        ? JSON.stringify(detailedResults.map((result) => result.stderr))
        : null,
      compileOutput: detailedResults.some((result) => result.compileOutput)
        ? JSON.stringify(detailedResults.map((result) => result.compileOutput))
        : null,
      status: isAllTestcasesPassed ? "Accepted" : "Wrong Answer",
      memory: detailedResults.some((result) => result.memory)
        ? JSON.stringify(detailedResults.map((result) => result.memory))
        : null,
      time: detailedResults.some((result) => result.time)
        ? JSON.stringify(detailedResults.map((result) => result.time))
        : null,
      userId: userId,
      problemId: problemId,
    },
  });

  if (isAllTestcasesPassed) {
    await prisma.problemSolved.upsert({
      where: {
        userId_problemId: {
          userId: userId,
          problemId: problemId,
        },
      },
      update: {},
      create: {
        userId: userId,
        problemId: problemId,
      },
    });
  }

  const testcaseResults = detailedResults.map((result) => {
    return {
      testcase: result.testcase,
      passed: result.passed,
      stdin: result.stdin,
      stdout: result.stdout,
      expectedOutput: result.expectedOutput,
      stderr: result.stderr,
      compileOutput: result.compileOutput,
      status: result.status,
      memory: result.memory,
      time: result.time,
      submissionId: submission.id,
    };
  });

  await prisma.testcaseResult.createMany({
    data: testcaseResults,
  });

  const submissionWithTestcaseResults = await prisma.submission.findUnique({
    where: {
      id: submission.id,
    },
    include: {
      testcaseResults: true,
    },
  });

  res.status(200).json(
    new ApiResponse(200, "Code Executed! Successfully!", {
      submission: submissionWithTestcaseResults,
    }),
  );
});
