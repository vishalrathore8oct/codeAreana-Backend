import express from "express";
import morgan from "morgan";
import logger from "./middlewares/logger.middleware.js";
import { swaggerUi, swaggerSpec } from "./middlewares/swagger.middleware.js";
import { errorHandler } from "./middlewares/error.middleware.js";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

const morganFormat = ":method :url :status :response-time ms";

// Middleware to log requests
app.use(
  morgan(morganFormat, {
    stream: {
      write: (message) => {
        const logObject = {
          method: message.split(" ")[0],
          url: message.split(" ")[1],
          status: message.split(" ")[2],
          responseTime: message.split(" ")[3],
        };
        logger.info(JSON.stringify(logObject));
      },
    },
  }),
);

// Middleware to Swagger UI
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// add all essential middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

// import all routes
import healthCheckRoutes from "./routes/healthCheck.routes.js";
import userAuthRoutes from "./routes/auth.routes.js";
import problemRoutes from "./routes/problem.routes.js";
import codeExicutionRoutes from "./routes/codeExicution.routes.js";
import submissionRoutes from "./routes/submission.routes.js";
import playlistRoutes from "./routes/playlist.routes.js";

// use all routes
app.use("/api/v1/health-check", healthCheckRoutes);
app.use("/api/v1/auth", userAuthRoutes);
app.use("/api/v1/problems", problemRoutes);
app.use("/api/v1/code-execution", codeExicutionRoutes);
app.use("/api/v1/submissions", submissionRoutes);
app.use("/api/v1/playlists", playlistRoutes);

// Default Global error handler
app.use(errorHandler);

export default app;
