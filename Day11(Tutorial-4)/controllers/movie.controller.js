import Movie from "../models/movie.model.js"


//create movie
export const createMovie = async (req, res) => {
    const newMovie = new Movie(req.body)
    try {
        const savedMovie = await newMovie.save();
        res.status(201).json({
            message: "Create Success",
            data: savedMovie,
        })
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error!",
            error: error
        })
    }
}

//update movie 
export const updateMovie = async (req, res) => {
    try {
        const updateMovie = await Movie.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        )
        res.status(200).json({
            message: "Updated Success!",
            data: updateMovie
        })
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error!",
            error: error
        })
    }
}

//get movies
export const getMovies = async (req, res) => {
    try {
        const movies = await Movie.find();
        res.status(200).json({
            message: "Success",
            data: movies
        })
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error!",
            error: error
        })
    }
}

//get movie
export const getMovie = async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id)
        res.status(200).json({
            message: "Success",
            data: movie
        })
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error!",
            error: error
        })
    }
}