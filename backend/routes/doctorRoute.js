const express = require('express');
const {
    getAllDoctors,
    createDoctor,
    deleteDoctor,
    getAllDoctorDetails,
    appointmentBooking,
    myAppointment
} = require('../controller/doctorController');
const { isAuthenticatedUser, authorizeRoles } = require('../midddleware/auth');

const router = express.Router();
// get all doctor
router.route("/doctors").get(getAllDoctors);
router.route("/admin/doctor/new")
    .post(createDoctor)
// delete doctor 
router.route("/admin/doctor/:id").delete(isAuthenticatedUser, authorizeRoles("admin"), deleteDoctor);
// get doctor details 
router.route("/doctors/:id").get(getAllDoctorDetails);
// book appointment 
router.route("/book/appointment").post(appointmentBooking)
// appointment list 
router.route("/myAppointment").get(isAuthenticatedUser, myAppointment);

module.exports = router;


// isAuthenticatedUser, authorizeRoles("admin"),