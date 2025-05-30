import { body, param } from "express-validator";

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

export const deletePlaylistValidator = () => {
  return [
    param("playlistId")
      .notEmpty()
      .withMessage("Playlist ID is required.")
      .isUUID()
      .withMessage("Invalid Playlist ID format."),
  ];
};

export const getPlaylistDetailsValidator = () => {
  return [
    param("playlistId")
      .notEmpty()
      .withMessage("Playlist ID is required.")
      .isUUID()
      .withMessage("Invalid Playlist ID format."),
  ];
};

export const addProblemToPlaylistValidator = () => {
  return [
    param("playlistId")
      .notEmpty()
      .withMessage("Playlist ID is required.")
      .isUUID()
      .withMessage("Invalid Playlist ID format."),
    body("problemIds")
      .isArray({ min: 1 })
      .withMessage("problemIds must be a non-empty array."),
    body("problemIds.*")
      .isUUID()
      .withMessage("Each problemId must be a valid UUID."),
  ];
};

export const removeProblemFromPlaylistValidator = () => {
  return [
    param("playlistId")
      .notEmpty()
      .withMessage("Playlist ID is required.")
      .isUUID()
      .withMessage("Invalid Playlist ID format."),
    body("problemIds")
      .isArray({ min: 1 })
      .withMessage("problemIds must be a non-empty array."),
    body("problemIds.*")
      .isUUID()
      .withMessage("Each problemId must be a valid UUID."),
  ];
};
