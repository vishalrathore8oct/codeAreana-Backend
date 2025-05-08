export const healthCheck = async (req, res) => {
  try {
    res.status(200).json({
      status: "success",
      message: "Health check passed",
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Health check failed",
      error: error.message,
    });
  }
};
