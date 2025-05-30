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
  getPlaylistDetailsValidator,
  addProblemToPlaylistValidator,
  removeProblemFromPlaylistValidator,
} from "../validators/playlist.validators.js";

const playlistRouter = Router();

/**
 * @swagger
 * /api/v1/playlists/create-playlist:
 *   post:
 *     summary: Create a new playlist
 *     description: Allows a user to create a new playlist.
 *     tags:
 *       - Playlists
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *                 example: My Favorite Problems
 *               description:
 *                 type: string
 *                 example: A playlist of my favorite coding problems.
 *     responses:
 *       201:
 *         description: Playlist created successfully.
 *       400:
 *         description: Playlist with this name already exists.
 *       401:
 *         description: Unauthorized.
 */
playlistRouter.post(
  "/create-playlist",
  createPlaylistValidator(),
  validateRequest,
  isLoggedIn,
  createPlaylist,
);

/**
 * @swagger
 * /api/v1/playlists/delete-playlist/{playlistId}:
 *   delete:
 *     summary: Delete a playlist
 *     description: Deletes a playlist by its ID.
 *     tags:
 *       - Playlists
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: playlistId
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: The playlist's unique ID.
 *     responses:
 *       200:
 *         description: Playlist deleted successfully.
 *       401:
 *         description: Unauthorized.
 *       404:
 *         description: Playlist not found.
 */
playlistRouter.delete(
  "/delete-playlist/:playlistId",
  deletePlaylistValidator(),
  validateRequest,
  isLoggedIn,
  deletePlaylist,
);

/**
 * @swagger
 * /api/v1/playlists/get-all-playlist:
 *   get:
 *     summary: Get all playlists for the current user
 *     description: Returns all playlists created by the logged-in user, including problems in each playlist.
 *     tags:
 *       - Playlists
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: All playlists fetched successfully.
 *       401:
 *         description: Unauthorized.
 */
playlistRouter.get("/get-all-playlist", isLoggedIn, getAllPlaylistDetails);

/**
 * @swagger
 * /api/v1/playlists/get-playlist/{playlistId}:
 *   get:
 *     summary: Get playlist details
 *     description: Returns details of a specific playlist, including all problems in the playlist.
 *     tags:
 *       - Playlists
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: playlistId
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: The playlist's unique ID.
 *     responses:
 *       200:
 *         description: Playlist details fetched successfully.
 *       401:
 *         description: Unauthorized.
 *       404:
 *         description: Playlist not found.
 */
playlistRouter.get(
  "/get-playlist/:playlistId",
  getPlaylistDetailsValidator(),
  validateRequest,
  isLoggedIn,
  getPlaylistDetails,
);

/**
 * @swagger
 * /api/v1/playlists/add-problem/{playlistId}:
 *   post:
 *     summary: Add problems to a playlist
 *     description: Adds one or more problems to a playlist.
 *     tags:
 *       - Playlists
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: playlistId
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: The playlist's unique ID.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - problemIds
 *             properties:
 *               problemIds:
 *                 type: array
 *                 items:
 *                   type: string
 *                   format: uuid
 *                 example: ["383c894d-dd29-4c37-9d6b-5cd051745cb6", "a6521e36-2d2f-47de-8198-3f5e3dc139fd"]
 *     responses:
 *       201:
 *         description: Problems added to playlist successfully.
 *       400:
 *         description: Invalid or missing problemIds.
 *       401:
 *         description: Unauthorized.
 */
playlistRouter.post(
  "/add-problem/:playlistId",
  addProblemToPlaylistValidator(),
  validateRequest,
  isLoggedIn,
  addProblemToPlaylist,
);

/**
 * @swagger
 * /api/v1/playlists/remove-problem/{playlistId}:
 *   delete:
 *     summary: Remove problems from a playlist
 *     description: Removes one or more problems from a playlist.
 *     tags:
 *       - Playlists
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: playlistId
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *         description: The playlist's unique ID.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - problemIds
 *             properties:
 *               problemIds:
 *                 type: array
 *                 items:
 *                   type: string
 *                   format: uuid
 *                 example: ["383c894d-dd29-4c37-9d6b-5cd051745cb6"]
 *     responses:
 *       200:
 *         description: Problems removed from playlist successfully.
 *       400:
 *         description: Invalid or missing problemIds.
 *       401:
 *         description: Unauthorized.
 *       404:
 *         description: No problems found in the playlist with the given IDs.
 */
playlistRouter.delete(
  "/remove-problem/:playlistId",
  removeProblemFromPlaylistValidator(),
  validateRequest,
  isLoggedIn,
  removeProblemFromPlaylist,
);

export default playlistRouter;
