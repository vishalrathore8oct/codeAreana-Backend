import { body } from "express-validator";

export const codeExicutionValidator = () => {
  return [
    body("sourcCode")
      .exists()
      .withMessage("Source code is required")
      .isString()
      .withMessage("Source code must be a string"),
    body("languageId")
      .exists()
      .withMessage("Language ID is required")
      .isString()
      .withMessage("Language ID must be a string"),
    body("stdin")
      .exists()
      .withMessage("Stdin is required")
      .isArray()
      .withMessage("Stdin must be an array")
      .custom((arr) => !arr || arr.length > 0)
      .withMessage("At least one stdin is required"),
    body("expectedOutput")
      .exists()
      .withMessage("Expected output is required")
      .isArray()
      .withMessage("Expected output must be an array")
      .custom((arr) => !arr || arr.length > 0)
      .withMessage("At least one expected output is required"),
    body("problemId")
      .exists()
      .withMessage("Problem ID is required")
      .isString()
      .withMessage("Problem ID must be a string")
      .isUUID(4)
      .withMessage("Problem ID must be a valid UUID (v4)"),
  ];
};
