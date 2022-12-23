const mongoose = require("mongoose");

const ConnectDB = () => {
    mongoose.set("strictQuery", true);
    return mongoose
        .connect(process.env.MONGODB)
        .then(() => console.log("MongoDB Connected!"))
        .catch((err) => console.log(`Couldn't connect to MongoDB!`, err));
};

module.exports = ConnectDB;