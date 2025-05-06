export const healthCheck = (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Health check passed",
  });
};
