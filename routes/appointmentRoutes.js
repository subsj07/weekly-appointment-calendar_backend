const express = require('express');
const { getAppointments, addAppointment, deleteAppointment, updateAppointment } = require('../controllers/appointmentController');
const router = express.Router();

router.route('/').get(getAppointments).post(addAppointment);
router.route('/:id').delete(deleteAppointment).put(updateAppointment)

module.exports = router;
