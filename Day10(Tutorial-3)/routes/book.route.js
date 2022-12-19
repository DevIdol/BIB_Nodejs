import express, { application } from 'express'

const bookRouter = express.Router()

bookRouter.route("/")
    .get()
    .post()

export default bookRouter;