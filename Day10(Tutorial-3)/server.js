import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";
import bodyParser from "body-parser"
import multer from "multer";
import bookRouter from "./routes/book.route.js";


dotenv.config();
const app = express();

const PORT = process.env.PORT || 8080

//middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer().array())


app.get("/", (req, res) => {
    res.status(200).json({ message: "Default Route" })
})

//db
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_DB || "").then(() => {
    console.log(`MongoDB Connected!`)
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
    //route
    app.use('/api/books', bookRouter)
}).catch(() => console.log(`MongoDB couldn't connect!`))
