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

export const deletePlaylist = asyncHandler(async (req, res) => {
  const { playlistId } = req.params;
  const userId = req.user.userId;
  const playlist = await prisma.playlist.findUnique({
    where: {
      id: playlistId,
      userId,
    },
  });
  if (!playlist) {
    throw new ApiError(404, "Playlist not found.");
  }
  await prisma.playlist.delete({
    where: {
      id: playlistId,
    },
  });
  res
    .status(200)
    .json(
      new ApiResponse(200, "Playlist deleted successfully.", { playlistId }),
    );
});

export const getAllPlaylistDetails = asyncHandler(async (req, res) => {
  const userId = req.user.userId;
  const playlists = await prisma.playlist.findMany({
    where: {
      userId,
    },
    include: {
      playlistProblems: {
        include: {
          problem: true,
        },
      },
    },
  });
  res.status(200).json(
    new ApiResponse(200, "All playlists fetched successfully.", {
      playlists,
    }),
  );
});

export const getPlaylistDetails = asyncHandler(async (req, res) => {
  const { playlistId } = req.params;
  const userId = req.user.userId;
  const playlist = await prisma.playlist.findUnique({
    where: {
      id: playlistId,
      userId,
    },
    include: {
      playlistProblems: {
        include: {
          problem: true,
        },
      },
    },
  });
  if (!playlist) {
    throw new ApiError(404, "Playlist not found.");
  }
  res.status(200).json(
    new ApiResponse(200, "Playlist details fetched successfully.", {
      playlist,
    }),
  );
});

export const addProblemToPlaylist = asyncHandler(async (req, res) => {
  const { playlistId } = req.params;
  const { problemIds } = req.body;

  if (!Array.isArray(problemIds) || problemIds.length === 0) {
    throw new ApiError(400, "Invalid or missing problemIds");
  }

  const playlistProblems = await prisma.playlistProblem.createMany({
    data: problemIds.map((problemId) => ({
      playlistId: playlistId,
      problemId: problemId,
    })),
  });

  res.status(201).json(
    new ApiResponse(201, "Problems added to playlist successfully", {
      playlistProblems,
    }),
  );
});

export const removeProblemFromPlaylist = asyncHandler(async (req, res) => {
  const { playlistId } = req.params;
  const { problemIds } = req.body;

  if (!Array.isArray(problemIds) || problemIds.length === 0) {
    throw new ApiError(400, "Invalid or missing problemIds");
  }

  const deletedProblems = await prisma.playlistProblem.deleteMany({
    where: {
      playlistId: playlistId,
      problemId: {
        in: problemIds,
      },
    },
  });
  if (deletedProblems.count === 0) {
    throw new ApiError(
      404,
      "No problems found in the playlist with the given IDs.",
    );
  }
  res.status(200).json(
    new ApiResponse(200, "Problems removed from playlist successfully", {
      deletedCount: deletedProblems.count,
    }),
  );
});
