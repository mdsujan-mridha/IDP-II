const express = require('express');
const {
    getAllDoctors,
    createDoctor,
    deleteDoctor,
    getAllDoctorDetails,
    appointmentBooking,
    myAppointment,
    getAllAppointments,
    getAllDoctorAdmin
} = require('../controller/doctorController');
const { isAuthenticatedUser, authorizeRoles } = require('../midddleware/auth');

const router = express.Router();
// get all doctor
router.route("/doctors").get(getAllDoctors);
router.route("/admin/doctor/new").post(isAuthenticatedUser, authorizeRoles("admin"), createDoctor)
// delete doctor 
router.route("/admin/doctor/:id").delete(isAuthenticatedUser, authorizeRoles("admin"), deleteDoctor);
// get doctor details 
router.route("/doctors/:id").get(getAllDoctorDetails);
// book appointment 
router.route("/book/appointment").post(appointmentBooking)
// appointment list 
router.route("/myAppointment").get(isAuthenticatedUser, myAppointment);
// get all appointment by admin 
router.route("/admin/appointments").get(isAuthenticatedUser, authorizeRoles("admin"), getAllAppointments);
// get all doctors by admin 
router.route("/admin/allDoctors").get(isAuthenticatedUser, authorizeRoles("admin"), getAllDoctorAdmin);
module.exports = router;


// isAuthenticatedUser, authorizeRoles("admin"),