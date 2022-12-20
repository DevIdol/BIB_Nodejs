import Movie from "../models/movie.model.js"




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