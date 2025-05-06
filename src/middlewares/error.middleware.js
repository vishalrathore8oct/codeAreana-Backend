const errorHandler = (err, req, res, _next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    statusCode: statusCode,
    message: message,
    success: false,
  });
};

export { errorHandler };
