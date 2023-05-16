const express = require('express');
const { registerUser, loginUser, forgotPassword } = require('../controller/userController');

const router = express.Router();

// register user 
router.route("/register").post(registerUser);
// login user 
router.route("/login").post(loginUser);

// forgot password 
router.route("/password/forgot").post(forgotPassword);