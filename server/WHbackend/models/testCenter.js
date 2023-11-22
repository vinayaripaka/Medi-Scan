const mongoose = require('mongoose')

const testCenterSchema = new mongoose.Schema({
    name : { type: String, required: true },
    address: { type: String, required: true},
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    contact: { type: String, required: true, unique: true }
})

const TestCenter = new mongoose.model('TestCenter', testCenterSchema)

module.exports = TestCenter
