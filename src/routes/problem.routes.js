import { Router } from "express";
import {
  createProblem,
  getAllProblems,
  getProblemById,
  updateProblemById,
  deleteProblemById,
  getAllProblemsSolvedByUser,
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

problemRouter.get("/get-problem/:id", isLoggedIn, getProblemById);

problemRouter.put(
  "/update-problem/:id",
  isLoggedIn,
  authorizeRoles(["ADMIN"]),
  updateProblemById,
);

problemRouter.delete(
  "/delete-problem/:id",
  isLoggedIn,
  authorizeRoles(["ADMIN"]),
  deleteProblemById,
);

problemRouter.get(
  "/get-solved-problems",
  isLoggedIn,
  getAllProblemsSolvedByUser,
);

export default problemRouter;
