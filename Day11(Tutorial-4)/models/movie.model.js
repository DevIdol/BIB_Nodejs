import { Schema, model } from "mongoose";

const movieSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    },
    rating: {
        type: String,
        trim: true,
        requiredt: true
    },
    actor: {
        type: String,
        trim: true,
        required: true,
    },
    director: {
        type: String,
        trim: true,
        required: true,
    }
},
    { timestamps: true }
)

export default model('movies', movieSchema)