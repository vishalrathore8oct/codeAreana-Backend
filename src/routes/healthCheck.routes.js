import { Router } from "express";
import { healthCheck } from "../controllers/healthCheck.controllers.js";

const healthCheckRouter = Router();

/**
 * @swagger
 * /api/v1/health-check:
 *   get:
 *     summary: Health Check
 *     description: Returns the health status of the application.
 *     responses:
 *       200:
 *         description: Application is healthy.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "OK"
 */
healthCheckRouter.get("/", healthCheck);

export default healthCheckRouter;
