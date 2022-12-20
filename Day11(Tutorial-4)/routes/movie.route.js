import express from "express"
import { createMovie, getMovie, getMovies, updateMovie } from "../controllers/movie.controller.js";

const router = express.Router();

//create movie
router.post('/', createMovie)

//update movie
router.put('/update/:id', updateMovie)

//get movies
router.get('/', getMovies)

//get movie
router.get('/:id', getMovie)

export default router;