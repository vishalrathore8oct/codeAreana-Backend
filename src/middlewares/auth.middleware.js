import jwt from "jsonwebtoken";

export const isLoggedIn = (req, res, next) => {
  const token =
    req.cookies?.accessToken ||
    req.header("Authorization")?.replace("Bearer ", "");

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
