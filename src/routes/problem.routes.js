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
 *               - hints
 *               - editorial
 *               - examples
 *               - constraints
 *               - testcases
 *               - codeSnippets
 *               - referenceSolutions
 *             properties:
 *               title:
 *                 type: string
 *                 example: Check Even or Odd 1
 *               description:
 *                 type: string
 *                 example: Given an integer n, determine whether it is even or odd.
 *               difficulty:
 *                 type: string
 *                 enum: [EASY, MEDIUM, HARD]
 *                 example: EASY
 *               tags:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example: ["math", "modulo", "conditional"]
 *               hints:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example: ["Use the modulo operator (%) to determine if a number is divisible by 2.", "If n % 2 equals 0, then the number is even."]
 *               editorial:
 *                 type: string
 *                 example: To determine if a number is even or odd, check the remainder when it is divided by 2 using the modulo (%) operator. If the remainder is 0, the number is even; otherwise, it is odd.
 *               examples:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     input:
 *                       type: string
 *                     output:
 *                       type: string
 *                     explanation:
 *                       type: string
 *                 example:
 *                   - input: "4"
 *                     output: "Even"
 *                     explanation: "4 % 2 = 0, so the number is even."
 *                   - input: "7"
 *                     output: "Odd"
 *                     explanation: "7 % 2 = 1, so the number is odd."
 *               constraints:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example: ["-10^9 ≤ n ≤ 10^9"]
 *               testcases:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     input:
 *                       type: string
 *                     output:
 *                       type: string
 *                 example:
 *                   - input: "0"
 *                     output: "Even"
 *                   - input: "-11"
 *                     output: "Odd"
 *                   - input: "100"
 *                     output: "Even"
 *               codeSnippets:
 *                 type: object
 *                 additionalProperties:
 *                   type: string
 *                 example:
 *                   JAVASCRIPT: |
 *                     const fs = require('fs');
 *                     function checkEvenOrOdd(n) {
 *                         // Write your code here
 *                         return n % 2 === 0 ? 'Even' : 'Odd';
 *                     }
 *                     const input = fs.readFileSync(0, 'utf-8').trim();
 *                     const n = Number(input);
 *                     console.log(checkEvenOrOdd(n));
 *                   PYTHON: |
 *                     def check_even_or_odd(n):
 *                         # Write your code here
 *                         return 'Even' if n % 2 == 0 else 'Odd'
 *                     import sys
 *                     n = int(sys.stdin.read())
 *                     print(check_even_or_odd(n))
 *                   JAVA: |
 *                     import java.util.Scanner;
 *                     public class Main {
 *                         public static String checkEvenOrOdd(int n) {
 *                             // Write your code here
 *                             return n % 2 == 0 ? "Even" : "Odd";
 *                         }
 *                         public static void main(String[] args) {
 *                             Scanner sc = new Scanner(System.in);
 *                             int n = sc.nextInt();
 *                             System.out.println(checkEvenOrOdd(n));
 *                         }
 *                     }
 *               referenceSolutions:
 *                 type: object
 *                 additionalProperties:
 *                   type: string
 *                 example:
 *                   JAVASCRIPT: |
 *                     const fs = require('fs');
 *                     const n = Number(fs.readFileSync(0, 'utf-8').trim());
 *                     console.log(n % 2 === 0 ? 'Even' : 'Odd');
 *                   PYTHON: |
 *                     import sys
 *                     n = int(sys.stdin.read())
 *                     print('Even' if n % 2 == 0 else 'Odd')
 *                   JAVA: |
 *                     import java.util.Scanner;
 *                     public class Main {
 *                         public static void main(String[] args) {
 *                             Scanner sc = new Scanner(System.in);
 *                             int n = sc.nextInt();
 *                             System.out.println(n % 2 == 0 ? "Even" : "Odd");
 *                         }
 *                     }
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
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: "Maximum of Two Numbers"
 *               description:
 *                 type: string
 *                 example: "Given two integers a and b, return the maximum of the two."
 *               difficulty:
 *                 type: string
 *                 enum: [EASY, MEDIUM, HARD]
 *                 example: "EASY"
 *               tags:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example: ["math", "comparison", "conditional"]
 *               hints:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example: [
 *                   "Use a conditional operator or built-in function to compare a and b.",
 *                   "Ensure inputs are properly parsed as numbers before comparison."
 *                 ]
 *               editorial:
 *                 type: string
 *                 example: "To solve this problem, compare the two input numbers using a conditional expression like the ternary operator or an if-else block..."
 *               examples:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     input:
 *                       type: string
 *                     output:
 *                       type: string
 *                     explanation:
 *                       type: string
 *               constraints:
 *                 type: array
 *                 items:
 *                   type: string
 *                 example: ["-10^9 ≤ a, b ≤ 10^9"]
 *               testcases:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     input:
 *                       type: string
 *                     output:
 *                       type: string
 *               codeSnippets:
 *                 type: object
 *                 properties:
 *                   JAVASCRIPT:
 *                     type: string
 *                   PYTHON:
 *                     type: string
 *                   JAVA:
 *                     type: string
 *               referenceSolutions:
 *                 type: object
 *                 properties:
 *                   JAVASCRIPT:
 *                     type: string
 *                   PYTHON:
 *                     type: string
 *                   JAVA:
 *                     type: string
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

/**
 * @swagger
 * /api/v1/problems/get-solved-problems:
 *   get:
 *     summary: Get all problems solved by the current user
 *     description: Returns a list of all problems that the logged-in user has solved.
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
problemRouter.get(
  "/get-solved-problems",
  isLoggedIn,
  getAllProblemsSolvedByUser,
);

export default problemRouter;
