const mongoose = require('mongoose')

const bookingSchema = new mongoose.Schema({
    from: { type: String, required: true },
    to: { type: String, required: true },
    status: { type: String, required: true },
    slot: { type: String },
    testName: { type: String }
})

const Booking = new mongoose.model('Booking', bookingSchema)

module.exports = Booking
