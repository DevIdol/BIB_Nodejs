import Book from "../models/book.model.js"


//get books
export const getBooks = async (req, res) => {
    try {
        const books = await Book.find()
        res.status(200).json({
            message: "Success",
            data: books
        })
    } catch (err) {
        console.log("Error: ", err)
    }
}

//post
export const createBook = async (req, res) => {
    const newBook = new Book({
        name: req.body.name,
        author: req.body.author,
        description: req.body.description,
        year: req.body.year
    })
    try {
        const savedBook = await newBook.save()
        res.status(201).json({
            message: "Success",
            data: savedBook
        })
    } catch (err) {
        console.log("Error:", err)
    }
}

//get book
export const getBook = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id)
        res.status(200).json({
            message: "Success",
            data: book
        })
    } catch (err) {
        console.log("Error:", err)
    }
}