import { param } from "express-validator";

export const getUserSubmissionsForProblemValidator = () => {
  return [
    param("problemId")
      .exists()
      .withMessage("Problem ID is required")
      .isUUID(4)
      .withMessage("Problem ID must be a valid UUID (v4)"),
  ];
};
export const getSubmissionCountForProblemValidator = () => {
  return [
    param("problemId")
      .exists()
      .withMessage("Problem ID is required")
      .isUUID(4)
      .withMessage("Problem ID must be a valid UUID (v4)"),
  ];
};
