import express from 'express'
import { createMovie, deleteMovie, getMovie, getMovies, updateMovie } from '../controllers/movie.controller.js';

const router = express.Router();

//get movies
router.get('/', getMovies)

//create
router.post("/", createMovie)

//update
router.put('/:id', updateMovie)

//delete
router.delete('/:id', deleteMovie)

//get movie
router.get('/:id', getMovie)


export default router;