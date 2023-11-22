const express = require('express')
const router = express.Router()
const { showTest, createTest, showAllTest } = require('../controllers/test.js')

router.post('/show', showTest)
router.get('/show-all', showAllTest)
router.post('/create', createTest)

module.exports = router
