import express from "express"
import { getMovies } from "../controllers/movie.controller.js";

const router = express.Router();


//get movies
router.get('/', getMovies)

export default router;