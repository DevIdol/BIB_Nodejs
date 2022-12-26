
import mongoose from "mongoose";

export const connectDB = () => {
    mongoose.set("strictQuery", true);
    return mongoose.connect(process.env.MONGODB)
        .then(() => console.log(`MongoDB Connected!`))
        .catch((err) => console.log("Couldn't Connect to MongoDB!", err))
}