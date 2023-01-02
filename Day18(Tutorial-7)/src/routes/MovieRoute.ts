import express, { Router } from "express";
import {
  getMovies,
  createMovie,
  updateMovie,
  deleteMovie,
  findMovie,
} from "../controllers/MovieController";

const router: Router = express.Router();

router.get("/", getMovies);

router.post("/", createMovie);

router.put("/:id", updateMovie);

router.delete("/:id", deleteMovie);

router.get("/:id", findMovie);

export default router;
