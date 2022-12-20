import express from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import { connectDB } from './db.js'
import mongoose from 'mongoose'

dotenv.config()
const app = express()
const PORT = process.env.PORT || 8080

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

//db
connectDB();

//default route
app.get('/', (req, res) => res.json({ message: "Default Route is OK" }));



app.listen(PORT, () => console.log(`Server running on port ${PORT}`))