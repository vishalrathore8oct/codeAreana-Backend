import jwt from "jsonwebtoken";

export const isLoggedIn = (req, res, next) => {
  const token = req.cookies?.accessToken;

  if (!token) {
    return res
      .status(401)
      .json({ message: "Unauthorized! No token provided." });
  }

  const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

  if (!decodedToken) {
    return res.status(401).json({ message: "Unauthorized! Invalid token." });
  }

  req.user = decodedToken;
  next();
};

export const authorizeRoles = (allowedRoles) => {
  return (req, res, next) => {
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
