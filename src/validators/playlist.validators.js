import { body } from "express-validator";

export const createPlaylistValidator = () => {
  return [
    body("name")
      .notEmpty()
      .withMessage("Playlist name is required.")
      .isLength({ min: 3 })
      .withMessage("Playlist name must be at least 3 characters long."),

    body("description")
      .notEmpty()
      .withMessage("Description is required.")
      .isLength({ min: 10 })
      .withMessage("Description must be at least 10 characters long."),
  ];
};
