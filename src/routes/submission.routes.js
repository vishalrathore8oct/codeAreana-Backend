import { Router } from "express";
import {
  getUserSubmissions,
  getUserSubmissionsForProblem,
  getSubmissionCountForProblem,
} from "../controllers/submission.controllers.js";
import { isLoggedIn } from "../middlewares/auth.middleware.js";
import { validateRequest } from "../middlewares/validator.middlewares.js";
import {
  getUserSubmissionsForProblemValidator,
  getSubmissionCountForProblemValidator,
} from "../validators/submission.validators.js";

const submissionRouter = Router();

/**
 * @swagger
 * /api/v1/submissions/get-user-submissions:
 *   get:
 *     summary: Get all submissions by the current user
 *     description: Returns a list of all code submissions made by the logged-in user.
 *     tags:
 *       - Submissions
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Submissions fetched successfully.
 *       401:
 *         description: Unauthorized.
 *       404:
 *         description: No submissions found for this user.
 */
submissionRouter.get("/get-user-submissions", isLoggedIn, getUserSubmissions);

/**
 * @swagger
 * /api/v1/submissions/get-user-problem-submissions/{problemId}:
 *   get:
 *     summary: Get all submissions by the current user for a specific problem
 *     description: Returns all code submissions made by the logged-in user for the specified problem.
 *     tags:
 *       - Submissions
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: problemId
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: The problem's unique ID.
 *     responses:
 *       200:
 *         description: Submissions fetched successfully.
 *       401:
 *         description: Unauthorized.
 *       404:
 *         description: No submissions found for this user.
 */
submissionRouter.get(
  "/get-user-problem-submissions/:problemId",
  getUserSubmissionsForProblemValidator(),
  validateRequest,
  isLoggedIn,
  getUserSubmissionsForProblem,
);
submissionRouter.get(
  "/get-problem-submissions-count/:problemId",
  getSubmissionCountForProblemValidator(),
  validateRequest,
  isLoggedIn,
  getSubmissionCountForProblem,
);

export default submissionRouter;
