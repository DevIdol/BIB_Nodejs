const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        trim: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
})


module.exports = mongoose.model('users', userSchema)
