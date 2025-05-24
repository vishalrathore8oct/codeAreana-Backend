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

const playlistRouter = Router();

playlistRouter.post("/create-playlist", isLoggedIn, createPlaylist);
playlistRouter.delete(
  "/:playlistId/delete-playlist",
  isLoggedIn,
  deletePlaylist,
);
playlistRouter.get("/get-all-playlist", isLoggedIn, getAllPlaylistDetails);
playlistRouter.get("/:playlistId/get-playlist", isLoggedIn, getPlaylistDetails);
playlistRouter.post(
  "/:playlistId/add-problem",
  isLoggedIn,
  addProblemToPlaylist,
);
playlistRouter.delete(
  "/:playlistId/remove-problem",
  isLoggedIn,
  removeProblemFromPlaylist,
);

export default playlistRouter;
