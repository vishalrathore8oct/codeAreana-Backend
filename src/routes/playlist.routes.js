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
  "/delete-playlist/:playlistId",
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
