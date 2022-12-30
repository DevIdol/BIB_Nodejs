"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findMovieService = exports.deleteMovieService = exports.updateMovieService = exports.createMovieService = exports.getMovieService = void 0;
const MovieModel_1 = __importDefault(require("../models/MovieModel"));
const Error_1 = require("../utils/Error");
//get movies
const getMovieService = async (req, res, next) => {
    try {
        const movies = await MovieModel_1.default.find();
        res.render('index', {
            title: "Movie List",
            movies
        });
        // res.status(200).json({
        //     message: "success",
        //     data: movies,
        // });
    }
    catch (error) {
        next((0, Error_1.createError)(500, "Something Wrong!"));
    }
};
exports.getMovieService = getMovieService;
//create movie
const createMovieService = async (req, res, next) => {
    try {
        let newMovie = new MovieModel_1.default(req.body);
        if (newMovie.$isEmpty()) {
            res.render('index', {
                error: "Can't Empty"
            });
        }
        await newMovie.save();
        res.redirect('/api/movies');
        // res.status(201).json({
        //     message: "success",
        //     data: savedMovie,
        // });
    }
    catch (error) {
        next((0, Error_1.createError)(500, "Something Wrong!"));
    }
};
exports.createMovieService = createMovieService;
//update movie
const updateMovieService = async (req, res, next) => {
    try {
        await MovieModel_1.default.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
        res.redirect('/api/movies');
        // res.status(200).json({
        //     message: "success",
        //     data: updateMovie,
        // });
    }
    catch (error) {
        next((0, Error_1.createError)(500, "Something Wrong!"));
    }
};
exports.updateMovieService = updateMovieService;
//delete movie
const deleteMovieService = async (req, res, next) => {
    try {
        await MovieModel_1.default.findByIdAndDelete(req.params.id);
        res.redirect('/api/movies');
        // res.status(200).json({
        //     message: "success",
        //     data: `${deleteMovie.name} Removed`,
        // });
    }
    catch (error) {
        next((0, Error_1.createError)(500, "Something Wrong!"));
    }
};
exports.deleteMovieService = deleteMovieService;
//find movie
const findMovieService = async (req, res, next) => {
    try {
        const movie = await MovieModel_1.default.findById(req.params.id);
        res.render('movies', {
            movie: movie
        });
        // res.status(200).json({
        //     message: "success",
        //     data: movie,
        // });
    }
    catch (error) {
        next((0, Error_1.createError)(500, "Something Wrong!"));
    }
};
exports.findMovieService = findMovieService;
//# sourceMappingURL=MovieService.js.map