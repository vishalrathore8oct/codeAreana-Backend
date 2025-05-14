import { Router } from "express";
import {
  createProblem,
  getProblemById,
  updateProblemById,
  deleteProblemById,
  getAllProblems,
} from "../controllers/problem.controllers.js";
import { isLoggedIn, authorizeRoles } from "../middlewares/auth.middleware.js";

const problemsRouter = Router();

problemsRouter.post(
  "/create-problem",
  isLoggedIn,
  authorizeRoles(["ADMIN"]),
  createProblem,
);
problemsRouter.get("/get-problem/:id", getProblemById);
problemsRouter.put("/update-problem/:id", updateProblemById);
problemsRouter.delete("/delete-problem/:id", deleteProblemById);
problemsRouter.get("/get-all-problems", getAllProblems);

export default problemsRouter;
