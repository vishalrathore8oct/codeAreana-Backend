import { Router } from "express";
import { codeExicution } from "../controllers/codeExicution.controllers.js";
import { isLoggedIn } from "../middlewares/auth.middleware.js";
import { codeExicutionValidator } from "../validators/codeExicution.validators.js";
import { validateRequest } from "../middlewares/validator.middlewares.js";

const codeExicutionRouter = Router();

/**
 * @swagger
 * /api/v1/code-execution:
 *   post:
 *     summary: Execute user code against problem testcases
 *     description: Submits user code for a problem, runs it against all provided testcases, and returns detailed results for each testcase along with the submission record.
 *     tags:
 *       - Code Execution
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - sourcCode
 *               - languageId
 *               - stdin
 *               - expectedOutput
 *               - problemId
 *             properties:
 *               sourcCode:
 *                 type: string
 *                 description: The user's source code to execute.
 *                 example: "const fs = require('fs');\nconst n = Number(fs.readFileSync(0, 'utf-8').trim());\nconsole.log(n % 2 === 0 ? 'Even' : 'Odd');"

 *               languageId:
 *                 type: string
 *                 description: Judge0 language ID.
 *                 example: "63"
 *               stdin:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: Array of input strings for each testcase.
 *                 example: ["0", "-11", "100"]
 *               expectedOutput:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: Array of expected outputs for each testcase.
 *                 example: ["Even", "Odd", "Even"]
 *               problemId:
 *                 type: string
 *                 format: uuid
 *                 description: The ID of the problem being solved.
 *                 example: "0c4d25b6-c6ae-4335-b0b1-346d4d871316"
 *     responses:
 *       200:
 *         description: Code executed and submission saved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 statusCode:
 *                   type: integer
 *                   example: 200
 *                 message:
 *                   type: string
 *                   example: Code Executed! Successfully!
 *                 data:
 *                   type: object
 *                   properties:
 *                     submission:
 *                       type: object
 *                       description: Submission record with testcase results.
 *       400:
 *         description: Invalid or missing testcases.
 *       401:
 *         description: Unauthorized.
 *       500:
 *         description: Internal server error.
 */
codeExicutionRouter.post(
  "/",
  codeExicutionValidator(),
  validateRequest,
  isLoggedIn,
  codeExicution,
);

export default codeExicutionRouter;
