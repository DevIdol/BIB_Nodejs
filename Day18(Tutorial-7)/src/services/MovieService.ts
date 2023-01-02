import { NextFunction, Request, Response } from "express";
import Movie from "../models/MovieModel";
import { createError } from "../utils/Error";

//get movies
export const getMovieService = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const year = req.query.year;
    let movies;
    if (year) {
      movies = await Movie.find({ year });
    } else {
      movies = await Movie.find();
    }
    res.status(200).json({
      message: "success",
      data: movies,
    });
  } catch (error: any) {
    next(createError(500, "Something Wrong!"));
  }
};

//create movie
export const createMovieService = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let newMovie: any = new Movie(req.body);
    const savedMovie = await newMovie.save();
    res.status(201).json({
      message: "success",
      daata: savedMovie,
    });
  } catch (error: any) {
    next(createError(500, "Something Wrong!"));
  }
};

//update movie
export const updateMovieService = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const updateMovie = await Movie.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json({
      message: "success",
      data: updateMovie,
    });
  } catch (error: any) {
    next(createError(500, "Something Wrong!"));
  }
};

//delete movie
export const deleteMovieService = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const deleteMovie: any = await Movie.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: "success",
      data: `${deleteMovie.name} removed`,
    });
  } catch (error: any) {
    next(createError(500, "Something Wrong!"));
  }
};

//find movie
export const findMovieService = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const movie = await Movie.findById(req.params.id);
    res.status(200).json({
      message: "success",
      data: movie,
    });
  } catch (error: any) {
    next(createError(500, "Something Wrong!"));
  }
};
