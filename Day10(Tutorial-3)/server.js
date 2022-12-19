import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";
import bodyParser from "body-parser"


dotenv.config();
const app = express();

const PORT = process.env.PORT || 8080

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

//db
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_DB || "").then(() => {
   console.log(`MongoDB Connected!`)
   app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
}).catch(() => console.log(`MongoDB couldn't connect!`))
