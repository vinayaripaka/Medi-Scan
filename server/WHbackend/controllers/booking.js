const Booking = require('../models/booking.js')

const showBooking = (req, res) => {
    if (req.body.role == "user") {
        Booking.find({ from: req.body.id })
            .then((bookings) => {
                const data = {
                    status: 200,
                    description: "Done",
                    bookings: bookings
                }
                res.json(data)
            })
            .catch((err) => console.log(err))
    }
    else {
        Booking.find({ to: req.body.id })
            .then((bookings) => {
                const data = {
                    status: 200,
                    description: "Done",
                    bookings: bookings
                }
                res.json(data)
            })
            .catch((err) => console.log(err))
    }
}

const createBooking = async (req, res) => {
    const newBooking = new Booking(req.body)
    await newBooking.save().then((response) => {
        const data = {
            status: 200,
            description: "created successfully"
        }
        res.json(data)
    }).catch((err) => console.log(err))
}

const userBooking = async (req, res) => {
    Booking.find({ from: req.body.id }).
        then((bookings) => {
            res.json({
                status: 200,
                bookings: bookings
            })
        }).catch((err) => console.log(err))
}
const testCenterBooking = async (req, res) => {
    Booking.find({ to: req.body.id }).
        then((bookings) => {
            res.json({
                status: 200,
                bookings: bookings
            })
        }).catch((err) => console.log(err))
}

const statusUpdate = async (req, res) => {
    let booking = await Booking.findOne({ _id: req.body.id })
    booking.status = req.body.status
    if (req.body.status == "Accepted") {
        booking.slot = req.body.slot
        console.log(req.body.slot)
    }
    await booking.save().then((response) => {
        res.json({
            status: 200,
            description: "Updated Successfully"
        })
    }).catch((err) => console.log(err))
}

module.exports = {
    showBooking,
    createBooking,
    userBooking,
    testCenterBooking,
    statusUpdate
}
