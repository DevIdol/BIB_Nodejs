import express from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import multer from 'multer'
import { connectDB } from './db.js'
import movieRouter from './routes/movie.route.js'

dotenv.config()
const app = express()
const PORT = process.env.PORT || 8080

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(multer().array())

//db
connectDB();

//default route
app.get('/', (req, res) => res.json({ message: "Default Route is OK" }));

//route api
app.use('/api/v1/movies', movieRouter)

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))