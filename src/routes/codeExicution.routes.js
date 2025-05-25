import { Router } from "express";
import { codeExicution } from "../controllers/codeExicution.controllers.js";
import { isLoggedIn } from "../middlewares/auth.middleware.js";
import { codeExicutionValidator } from "../validators/codeExicution.validators.js";
import { validateRequest } from "../middlewares/validator.middlewares.js";

const codeExicutionRouter = Router();

codeExicutionRouter.post(
  "/",
  codeExicutionValidator(),
  validateRequest,
  isLoggedIn,
  codeExicution,
);

export default codeExicutionRouter;
