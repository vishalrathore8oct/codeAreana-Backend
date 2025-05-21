import { Router } from "express";
import {
  createProblem,
  getAllProblems,
} from "../controllers/problem.controllers.js";
import { isLoggedIn, authorizeRoles } from "../middlewares/auth.middleware.js";

const problemRouter = Router();

problemRouter.post(
  "/create-problem",
  isLoggedIn,
  authorizeRoles(["ADMIN"]),
  createProblem,
);

problemRouter.get("/get-all-problems", isLoggedIn, getAllProblems);

export default problemRouter;
