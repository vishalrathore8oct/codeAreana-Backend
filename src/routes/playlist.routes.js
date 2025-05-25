import { Router } from "express";
import {
  createPlaylist,
  deletePlaylist,
  getAllPlaylistDetails,
  getPlaylistDetails,
  addProblemToPlaylist,
  removeProblemFromPlaylist,
} from "../controllers/playlist.controllers.js";
import { isLoggedIn } from "../middlewares/auth.middleware.js";
import { validateRequest } from "../middlewares/validator.middlewares.js";
import {
  createPlaylistValidator,
  deletePlaylistValidator,
} from "../validators/playlist.validators.js";

const playlistRouter = Router();

playlistRouter.post(
  "/create-playlist",
  createPlaylistValidator(),
  validateRequest,
  isLoggedIn,
  createPlaylist,
);

playlistRouter.delete(
  "/delete-playlist/:playlistId",
  deletePlaylistValidator(),
  validateRequest,
  isLoggedIn,
  deletePlaylist,
);
playlistRouter.get("/get-all-playlist", isLoggedIn, getAllPlaylistDetails);
playlistRouter.get("/get-playlist/:playlistId", isLoggedIn, getPlaylistDetails);
playlistRouter.post(
  "/add-problem/:playlistId",
  isLoggedIn,
  addProblemToPlaylist,
);
playlistRouter.delete(
  "/remove-problem/:playlistId",
  isLoggedIn,
  removeProblemFromPlaylist,
);

export default playlistRouter;
