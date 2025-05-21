import { Router } from "express";
import { createProblem } from "../controllers/problem.controllers.js";
import { isLoggedIn, authorizeRoles } from "../middlewares/auth.middleware.js";

const problemRouter = Router();

problemRouter.post(
  "/create-problem",
  isLoggedIn,
  authorizeRoles(["ADMIN"]),
  createProblem,
);

export default problemRouter;
