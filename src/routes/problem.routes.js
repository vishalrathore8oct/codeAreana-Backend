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
import { validateRequest } from "../middlewares/validator.middlewares.js";
import {
  createProblemValidator,
  getProblemByIdValidator,
  deleteProblemByIdValidator,
  updateProblemByIdValidator,
} from "../validators/problem.validators.js";

const problemRouter = Router();

problemRouter.post(
  "/create-problem",
  createProblemValidator(),
  validateRequest,
  isLoggedIn,
  authorizeRoles(["ADMIN"]),
  createProblem,
);

problemRouter.get("/get-all-problems", isLoggedIn, getAllProblems);

problemRouter.get(
  "/get-problem/:id",
  getProblemByIdValidator(),
  validateRequest,
  isLoggedIn,
  getProblemById,
);

problemRouter.put(
  "/update-problem/:id",
  updateProblemByIdValidator(),
  validateRequest,
  isLoggedIn,
  authorizeRoles(["ADMIN"]),
  updateProblemById,
);

problemRouter.delete(
  "/delete-problem/:id",
  deleteProblemByIdValidator(),
  validateRequest,
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
