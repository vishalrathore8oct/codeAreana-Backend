import { body, query } from "express-validator";

export const userRegisterValidator = () => {
  return [
    body("fullName")
      .trim()
      .notEmpty()
      .withMessage("Full name is required")
      .isLength({ min: 5, max: 20 })
      .withMessage("Full name must be between 5 and 20 characters")
      .matches(/^[a-zA-Z\s]+$/)
      .withMessage("Full name can only contain letters and spaces"),

    body("userName")
      .trim()
      .notEmpty()
      .withMessage("Username is required")
      .isLength({ min: 5, max: 20 })
      .withMessage("Username must be between 5 and 20 characters")
      .matches(/^[a-zA-Z0-9_]+$/)
      .withMessage(
        "Username can only contain letters, numbers, and underscores",
      ),

    body("email")
      .trim()
      .notEmpty()
      .withMessage("Email is required")
      .isEmail()
      .withMessage("Invalid email format"),

    body("password")
      .trim()
      .notEmpty()
      .withMessage("Password is required")
      .isLength({ min: 8 })
      .withMessage("Password must be at least 8 characters")
      .matches(/[A-Z]/)
      .withMessage("Password must contain at least one uppercase letter")
      .matches(/[a-z]/)
      .withMessage("Password must contain at least one lowercase letter")
      .matches(/[0-9]/)
      .withMessage("Password must contain at least one number")
      .matches(/[@$!%*?&]/)
      .withMessage("Password must contain at least one special character"),
  ];
};

export const verifyEmailValidator = () => {
  return [
    query("token")
      .trim()
      .notEmpty()
      .withMessage("Token is required")
      .isLength({ min: 1 })
      .withMessage("Token must be at least 1 character"),
  ];
};

export const resendVerificationEmailValidator = () => {
  return [
    body("email")
      .trim()
      .notEmpty()
      .withMessage("Email is required")
      .isEmail()
      .withMessage("Invalid email format"),
  ];
};

export const userLoginValidator = () => {
  return [
    body("email")
      .trim()
      .notEmpty()
      .withMessage("Email is required")
      .isEmail()
      .withMessage("Invalid email format"),

    body("password")
      .trim()
      .notEmpty()
      .withMessage("Password is required")
      .isLength({ min: 8 })
      .withMessage("Password must be at least 8 characters"),
  ];
};
