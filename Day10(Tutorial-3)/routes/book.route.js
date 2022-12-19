import express from 'express'
import { getBooks, createBook, getBook } from '../controllers/book.controller.js';

const bookRouter = express.Router()

bookRouter.route("/")
    .get(getBooks)
    .post(createBook)

bookRouter.get("/:id", getBook)

export default bookRouter;