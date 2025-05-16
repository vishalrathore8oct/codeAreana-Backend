import jwt from "jsonwebtoken";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";

// Middleware to check if user is logged in
export const isLoggedIn = asyncHandler(async (req, res, next) => {
  let token = req.cookies?.accessToken;
  console.log("AuthToken: ", token || "No token found");
  token = token || req.headers?.authorization?.split(" ")[1];

  console.log("AuthToken: ", token || "No token found");

  if (!token) {
    throw new ApiError(401, "Unauthorized: No token provided");
  }

  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    if (!decoded) {
      throw new ApiError(401, "Unauthorized: Invalid token");
    }

    req.user = decoded;
    next();
  } catch (error) {
    throw new ApiError(401, "Unauthorized: Invalid or expired token", error);
  }
});

// Middleware to authorize specific roles
export const authorizeRoles = (allowedRoles) => {
  return (req, res, next) => {
    const role = req.user?.userRole;

    if (!role) {
      throw new ApiError(401, "Unauthorized: No user role found");
    }

    if (!allowedRoles.includes(role)) {
      throw new ApiError(403, "Forbidden: Access denied");
    }

    next();
  };
};
