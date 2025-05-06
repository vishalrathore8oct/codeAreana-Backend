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

// Default Global error handler
app.use(errorHandler);

export default app;
