const express = require('express')
const router = express.Router()
const { validateTestCenter, createTestCenter, showTestCenter } = require('../controllers/testCenter.js')

router.post('/login', validateTestCenter)
router.post('/signup', createTestCenter)
router.get('/show', showTestCenter)

module.exports = router 
