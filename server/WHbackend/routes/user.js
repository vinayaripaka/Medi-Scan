const { validateUser, createUser } = require('../controllers/user.js')
const express = require('express')
const router = express.Router()


router.post('/login', validateUser)
router.post('/signup', createUser)
// router.post('/update', updateUser)
// router.post('/delete', deleteUser)

module.exports = router
