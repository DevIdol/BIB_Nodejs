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


//update movie 
export const updateMovie = async (req, res) => {
    const { id } = req.params.id;
    const { name, rating, actor, director } = req.body
    try {
        const movie = await Movie.find(m => m.id == id)
        if (name) movie.name == name
        if (rating) movie.rating == rating
        if (actor) movie.actor == actor
        if (director) movie.director = director

        res.status(200).json({
            message: "Updated Success!",
            data: movie
        })
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error!",
            error: error
        })
    }
}
