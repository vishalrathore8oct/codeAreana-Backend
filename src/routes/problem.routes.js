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

/**
 * @swagger
 * /api/v1/problems/create-problem:
 *   post:
 *     summary: Create a new coding problem
 *     description: Allows an admin to create a new coding problem with all required details and testcases.
 *     tags:
 *       - Problems
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - description
 *               - difficulty
 *               - tags
 *               - testcases
 *               - codeSnippets
 *               - referenceSolutions
 *             properties:
 *               title:
 *                 type: string
 *                 example: Add Two Numbers
 *               description:
 *                 type: string
 *                 example: Given two numbers a and b, add them up and return the output.
 *               difficulty:
 *                 type: string
 *                 enum: [EASY, MEDIUM, HARD]
 *                 example: EASY
 *               tags:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example: ["math", "addition"]
 *               hints:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example: ["Use the '+' operator."]
 *               examples:
 *                 type: array
 *                 items:
 *                   type: object
 *                 example: [{ "input": "3 7", "output": "10", "explanation": "Adding 3 and 7 gives 10." }]
 *               constraints:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example: ["-10^9 ≤ a, b ≤ 10^9"]
 *               editorial:
 *                 type: string
 *                 example: To solve this problem, simply add the two numbers.
 *               testcases:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     input:
 *                       type: string
 *                     output:
 *                       type: string
 *                 example: [{ "input": "1 2", "output": "3" }]
 *               codeSnippets:
 *                 type: object
 *                 example: { "JAVASCRIPT": "function add(a, b) { return a + b; }" }
 *               referenceSolutions:
 *                 type: object
 *                 example: { "JAVASCRIPT": "console.log(a + b);" }
 *     responses:
 *       201:
 *         description: Problem created successfully.
 *       400:
 *         description: Validation error or problem not created.
 *       401:
 *         description: Unauthorized.
 *       403:
 *         description: Forbidden.
 */
problemRouter.post(
  "/create-problem",
  createProblemValidator(),
  validateRequest,
  isLoggedIn,
  authorizeRoles(["ADMIN"]),
  createProblem,
);

/**
 * @swagger
 * /api/v1/problems/get-all-problems:
 *   get:
 *     summary: Get all coding problems
 *     description: Returns a list of all coding problems.
 *     tags:
 *       - Problems
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Problems fetched successfully.
 *       401:
 *         description: Unauthorized.
 */
problemRouter.get("/get-all-problems", isLoggedIn, getAllProblems);

/**
 * @swagger
 * /api/v1/problems/get-problem/{id}:
 *   get:
 *     summary: Get a problem by ID
 *     description: Fetch a single coding problem by its unique ID.
 *     tags:
 *       - Problems
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: The problem's unique ID.
 *     responses:
 *       200:
 *         description: Problem fetched successfully.
 *       400:
 *         description: Problem not found.
 *       401:
 *         description: Unauthorized.
 */
problemRouter.get(
  "/get-problem/:id",
  getProblemByIdValidator(),
  validateRequest,
  isLoggedIn,
  getProblemById,
);

/**
 * @swagger
 * /api/v1/problems/update-problem/{id}:
 *   put:
 *     summary: Update a problem by ID
 *     description: Allows an admin to update an existing coding problem.
 *     tags:
 *       - Problems
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: The problem's unique ID.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Problem'
 *     responses:
 *       200:
 *         description: Problem updated successfully.
 *       400:
 *         description: Problem not found or validation error.
 *       401:
 *         description: Unauthorized.
 *       403:
 *         description: Forbidden.
 */
problemRouter.put(
  "/update-problem/:id",
  updateProblemByIdValidator(),
  validateRequest,
  isLoggedIn,
  authorizeRoles(["ADMIN"]),
  updateProblemById,
);

/**
 * @swagger
 * /api/v1/problems/delete-problem/{id}:
 *   delete:
 *     summary: Delete a problem by ID
 *     description: Allows an admin to delete a coding problem by its unique ID.
 *     tags:
 *       - Problems
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: The problem's unique ID.
 *     responses:
 *       200:
 *         description: Problem deleted successfully.
 *       400:
 *         description: Problem not found.
 *       401:
 *         description: Unauthorized.
 *       403:
 *         description: Forbidden.
 */
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
