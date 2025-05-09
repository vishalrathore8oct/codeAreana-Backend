import { ApiError } from "../utils/ApiError.js";

const errorHandler = (err, req, res, _next) => {
  if (err instanceof ApiError) {
    return res.status(err.statusCode).json({
      statusCode: err.statusCode,
      message: err.message || "Something went wrong",
      success: false,
      errors: err.errors || null,
    });
  }

  // For unhandled errors
  return res.status(500).json({
    statusCode: 500,
    message: "Internal Server Error",
    success: false,
    errors: err.message || err.stack || null,
  });
};

export { errorHandler };
