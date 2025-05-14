import jwt from "jsonwebtoken";
import { ApiError } from "../utils/ApiError.js";

export const isLoggedIn = (req, res, next) => {
  let token = req.cookies?.accessToken;

  if (!token) {
    throw new ApiError(401, "Unauthorized: No token provided");
  }

  const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

  if (!decodedToken) {
    return res.status(401).json({ message: "Unauthorized! Invalid token." });
  }

  console.log("Decoded Token: ", decodedToken);

  req.user = decodedToken;
  next();
};

export const authorizeRoles = (allowedRoles) => {
  return (req, res, next) => {
    console.log("User: ", req.user);
    console.log("Allowed Roles: ", allowedRoles);
    console.log("User Role: ", req.user.userRole);

    if (!req.user || !req.user.userRole) {
      return res
        .status(401)
        .json({ message: "Unauthorized: User not authenticated" });
    }

    const userRole = req.user.userRole;

    if (!allowedRoles.includes(userRole)) {
      return res.status(403).json({ message: "Forbidden: Access denied" });
    }

    next();
  };
};
