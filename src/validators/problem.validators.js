import { body } from "express-validator";

export const createProblemValidator = () => {
  return [
    body("title")
      .trim()
      .notEmpty()
      .withMessage("Title is required")
      .isLength({ min: 3 })
      .withMessage("Title must be at least 3 characters"),

    body("description")
      .trim()
      .notEmpty()
      .withMessage("Description is required")
      .isLength({ min: 10 })
      .withMessage("Description must be at least 10 characters"),

    body("difficulty")
      .trim()
      .notEmpty()
      .withMessage("Difficulty is required")
      .isIn(["EASY", "MEDIUM", "HARD"])
      .withMessage("Difficulty must be one of easy, medium, or hard"),

    body("tags")
      .optional()
      .isArray()
      .withMessage("Tags must be an array")
      .custom((arr) => !arr || arr.length > 0)
      .withMessage("At least one tag is required"),

    body("hints")
      .optional()
      .isArray()
      .withMessage("Hints must be an array")
      .custom((arr) => !arr || arr.length > 0)
      .withMessage("At least one hint is required"),

    body("examples")
      .optional()
      .isArray()
      .withMessage("Examples must be an array")
      .custom((arr) => !arr || arr.length > 0)
      .withMessage("At least one example is required"),

    body("constraints")
      .optional()
      .isArray()
      .withMessage("Constraints must be an array")
      .custom((arr) => !arr || arr.length > 0)
      .withMessage("At least one constraint is required"),

    body("editorial")
      .optional()
      .isString()
      .withMessage("Editorial must be a string"),

    body("testcases")
      .exists({ checkNull: true })
      .withMessage("Testcases are required")
      .isArray()
      .withMessage("Testcases must be an array")
      .custom((arr) => !arr || arr.length > 0)
      .withMessage("At least one testcase is required"),

    body("codeSnippets")
      .exists({ checkNull: true })
      .withMessage("Code snippets are required")
      .isObject()
      .withMessage("Code snippets must be a valid JSON object"),

    body("referenceSolutions")
      .exists({ checkNull: true })
      .withMessage("Reference solutions are required")
      .isObject()
      .withMessage("Reference solutions must be a valid JSON object"),
  ];
};
