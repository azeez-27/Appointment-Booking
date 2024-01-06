const express = require('express')
const router = express.Router()

const TimeSlotsController = require('../controllers/TimeSlotsController')

router.get('/slots', TimeSlotsController.showTimeSlots)
router.post('/slots', TimeSlotsController.createTimeSlot)

module.exports = router