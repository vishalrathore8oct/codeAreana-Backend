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

submissionRouter.get("/get-user-submissions", isLoggedIn, getUserSubmissions);
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
