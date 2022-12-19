import { Schema, model } from "mongoose";


const bookSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    },
    author: {
        type: String,
        trim: true,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true
    }
},
    {
        timestamps: true,
    }
)

export default model("books", bookSchema)