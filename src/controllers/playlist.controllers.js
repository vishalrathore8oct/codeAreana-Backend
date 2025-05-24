/* eslint-disable */
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { prisma } from "../config/prismaClient.js";

export const createPlaylist = asyncHandler(async (req, res) => {
  const { name, description } = req.body;
  const userId = req.user.userId;

  const existingPlaylist = await prisma.playlist.findFirst({
    where: {
      name,
      userId,
    },
  });
  if (existingPlaylist) {
    throw new ApiError(400, "Playlist with this name already exists.");
  }

  const playlist = await prisma.playlist.create({
    data: {
      name,
      description,
      userId,
    },
  });

  res.status(201).json(
    new ApiResponse(201, "Playlist created successfully.", {
      playlist,
    }),
  );
});

export const deletePlaylist = asyncHandler(async (req, res) => {});

export const getAllPlaylistDetails = asyncHandler(async (req, res) => {});

export const getPlaylistDetails = asyncHandler(async (req, res) => {});

export const addProblemToPlaylist = asyncHandler(async (req, res) => {});

export const removeProblemFromPlaylist = asyncHandler(async (req, res) => {});
