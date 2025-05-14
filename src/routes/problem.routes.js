import { Router } from "express";
import {
  createProblemById,
  getProblemById,
  updateProblemById,
  deleteProblemById,
  getAllProblems,
} from "../controllers/problem.controllers";

const problemsRouter = Router();

problemsRouter.post("/create-problem", createProblemById);
problemsRouter.get("/get-problem/:id", getProblemById);
problemsRouter.put("/update-problem/:id", updateProblemById);
problemsRouter.delete("/delete-problem/:id", deleteProblemById);
problemsRouter.get("/get-all-problems", getAllProblems);

export default problemsRouter;
