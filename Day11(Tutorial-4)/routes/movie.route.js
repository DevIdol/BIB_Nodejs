import express from "express"
import { createMovie, getMovies, updateMovie } from "../controllers/movie.controller.js";

const router = express.Router();

//create movie
router.post('/', createMovie)

//update movie
router.post('/:id', updateMovie)

//get movies
router.get('/', getMovies)

export default router;