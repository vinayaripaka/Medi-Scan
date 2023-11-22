const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    dateOfBirth: { type: String },
    contact: { type: String, required: true, unique: true },
    gender: { type: String },
})


const User = new mongoose.model('User', userSchema)

module.exports = User
