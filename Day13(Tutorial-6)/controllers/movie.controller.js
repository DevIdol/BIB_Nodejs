import Movie from '../models/movie.model.js'


//create
export const createMovie = async (req, res) => {
    const newMovie = new Post(req.body)
    try {
        const savedMovie = await newMovie.save()
        res.status(201).json({
            message: "Created Movie",
            data: savedMovie
        })
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error!",
            error: error
        })
    }
}

//update
export const updateMovie = async (req, res) => {
    try {
        const updatedMovie = await Movie.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true },
        )
        res.status(200).json({
            message: "Updated Movie",
            data: updatedMovie
        })
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error!",
            error: error
        })
    }
}

//delete
export const deleteMovie = async (req, res) => {
    try {
        const deletedMovie = await Movie.findByIdAndDelete(req.params.id)
        !deletedMovie && res.status(404).json({ message: "Not Found!" })
        res.status(200).json({
            message: `Removed ${deletedMovie.name}`,
        })
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error!",
            error: error
        })
    }
}

//get all
export const getMovies = async (req, res) => {
    try {
        const movies = await Movie.find()
        res.status(200).json({
            message: "Get All Movies",
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
        const movie = await Post.findById(req.params.id)
        !movie && res.status(404).json({ message: "Not Found!" })
        res.status(200).json({
            message: "Get Movie",
            data: movie
        })
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error!",
            error: error
        })
    }
}