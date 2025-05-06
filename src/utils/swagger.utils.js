import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 4000;

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "YourCodeArena API",
      version: "1.0.0",
      description: "API documentation for YourCodeArena backend",
    },
    servers: [
      {
        url: `http://127.0.0.1:${PORT}`,
      },
    ],
  },
  apis: ["./src/routes/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);
export { swaggerUi, swaggerSpec };
