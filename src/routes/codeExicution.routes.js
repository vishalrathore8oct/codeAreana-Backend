import { Router } from "express";
import { codeExicution } from "../controllers/codeExicution.controllers.js";
import { isLoggedIn } from "../middlewares/auth.middleware.js";

const codeExicutionRouter = Router();

codeExicutionRouter.post("/", isLoggedIn, codeExicution);

export default codeExicutionRouter;
