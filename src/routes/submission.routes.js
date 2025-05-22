import { Router } from "express";
import {
  getAllUserSubmissions,
  getUserSubmissionsForProblem,
  getSubmissionCountForProblem,
} from "../controllers/submission.controllers.js";
import { isLoggedIn } from "../middlewares/auth.middleware.js";

const submissionRouter = Router();

submissionRouter.get(
  "/get-user-submissions",
  isLoggedIn,
  getAllUserSubmissions,
);
submissionRouter.get(
  "/get-user-problem-submissions/:problemId",
  isLoggedIn,
  getUserSubmissionsForProblem,
);
submissionRouter.get(
  "get-problem-submissions-count/:problemId",
  isLoggedIn,
  getSubmissionCountForProblem,
);

export default submissionRouter;
