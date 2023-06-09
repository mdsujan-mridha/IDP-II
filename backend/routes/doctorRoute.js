const express = require('express');
const { getAllDoctors, createDoctor, deleteDoctor, getAllDoctorDetails } = require('../controller/doctorController');
const { isAuthenticatedUser, authorizeRoles } = require('../midddleware/auth');

const router = express.Router();
// get all doctor
router.route("/doctors").get(getAllDoctors);
router.route("/admin/product/new")
.post(isAuthenticatedUser,authorizeRoles("admin"),createDoctor)
// delete doctor 
router.route("/admin/doctor/:id").delete(isAuthenticatedUser,authorizeRoles("admin"),deleteDoctor);
// get doctor details 
router.route("/doctor/:id").get(getAllDoctorDetails);

module.exports = router;