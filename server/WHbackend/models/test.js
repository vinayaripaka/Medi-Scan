const mongoose = require('mongoose')

const testSchema = new mongoose.Schema({
    name: { type: String, required: true },
    centerId : { type: String, required: true },
    price: { type: String, required: true },
    description: { type: String, required: true }
})

const Test = new mongoose.model('Test', testSchema)

module.exports = Test
