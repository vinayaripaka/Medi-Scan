const express = require('express')
const router = express.Router()
const { showBooking, createBooking, userBooking, testCenterBooking, statusUpdate } = require('../controllers/booking.js')

router.post('/show', showBooking)
router.post('/create', createBooking)
router.post('/user', userBooking)
router.post('/testcenter', testCenterBooking)
router.post('/status-update', statusUpdate)


module.exports = router
