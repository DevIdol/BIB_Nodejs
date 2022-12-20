import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.set('strictQuery', true)
        await mongoose.connect(process.env.MONGODB)
        console.log('MongoDB connected!')
    } catch (error) {
        console.log("Couldn't connect to MongoDB", error)
    }
}