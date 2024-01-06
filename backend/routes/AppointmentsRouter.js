const express = require('express')
const router = express.Router()

const AppointmentsController = require('../controllers/AppointmentsController')

router.get('/appointments', AppointmentsController.showAppointments)
router.post('/appointments', AppointmentsController.bookAppointment)

module.exports = router