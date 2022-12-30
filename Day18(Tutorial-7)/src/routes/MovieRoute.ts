import express, { Router, Request, Response, NextFunction } from "express";
import Movie from "../models/MovieModel";
import {
    getMovies,
    createMovie,
    updateMovie,
    deleteMovie,
    findMovie,
} from "../controllers/MovieController";
import { createError } from "../utils/Error";

const router: Router = express.Router();

// new article form
router.get("/add", function (req: Request, res: Response) {
    res.render("add_movies");
});

// Edit From
router.get(
    "/edit/:id",
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const movie = await Movie.findById(req.params.id);
            res.render("edit_movies", {
                movie: movie,
            });
        } catch (error) {
            next(createError(500, "Something Wrong!"));
        }
    }
);

router.get("/", getMovies);

router.post("/", createMovie);

router.post("/:id", updateMovie);

router.delete("/:id", deleteMovie);

router.get("/:id", findMovie);

export default router;
