import { errorHandler } from "../middleware/error.handler.js";
import Movie from "../models/movie.model.js";

//create
export const createMovie = async (req, res, next) => {
    const newMovie = new Movie(req.body);
    try {
        const savedMovie = await newMovie.save();
        res.status(201).json({
            message: "Created Movie",
            data: savedMovie,
        });
    } catch (error) {
        next(errorHandler(500, "Something Wrong!"));
    }
};

//update
export const updateMovie = async (req, res) => {
    try {
        const updatedMovie = await Movie.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json({
            message: "Updated Movie",
            data: updatedMovie,
        });
    } catch (error) {
        next(errorHandler(500, "Something Wrong!"));
    }
};

//delete
export const deleteMovie = async (req, res, next) => {
    try {
        const deletedMovie = await Movie.findByIdAndDelete(req.params.id);
        res.status(200).json({
            message: `Removed ${deletedMovie.name}`,
        });
    } catch (error) {
        next(errorHandler(500, "Something Wrong!"));
    }
};

//get movies
export const getMovies = async (req, res) => {
    try {
        const movies = await Movie.find();
        res.status(200).json({
            message: "Get All Movies",
            data: movies,
        });
    } catch (error) {
        next(errorHandler(500, "Something Wrong!"));
    }
};

//get movie
export const getMovie = async (req, res, next) => {
    try {
        const movie = await Movie.findById(req.params.id);
        res.status(200).json({
            message: "Get Movie",
            data: movie,
        });
    } catch (error) {
        next(errorHandler(500, "Something Wrong!"));
    }
};
