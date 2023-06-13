const express = require('express');
const { registerUser, loginUser, forgotPassword, getUserDetails, getAllUsers, getAllUser, deleteUser, logout } = require('../controller/userController');
const { isAuthenticatedUser, authorizeRoles } = require('../midddleware/auth');

const router = express.Router();

// register user 
router.route("/register").post(registerUser);
// login user 
router.route("/login").post(loginUser);

// forgot password 
router.route("/password/forgot").post(forgotPassword);
// get user details 
router.route("/me").get(isAuthenticatedUser, getUserDetails);
// get all user by admin 
router.route("/admin/users").get(isAuthenticatedUser,authorizeRoles("admin"),getAllUsers);
// get single user by admin 
router.route("/admin/user/:id").get(getAllUser);
// delete user 
router.route("/admin/user/:id").delete(deleteUser);
// logout user 
router.route("/logout").get(logout);
module.exports = router;