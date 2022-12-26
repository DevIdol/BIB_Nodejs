import { Schema, model } from "mongoose";

const MovieSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    },
    year: {
        type: Number,
        trim: true,
        required: true,
    },
    rating: {
        type: String,
        trim: true,
        requiredt: true
    }

}, { timestamps: true })

export default model('movies', MovieSchema)