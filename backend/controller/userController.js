const catchAsyncErrors = require("../midddleware/catchAsyncErrors");
const sendToken = require("../utils/jwtToken");
const ErrorHandler = require("../utils/ErrorHandler");
const User = require("../models/userModel");
const sendEmail = require("../utils/sendEmail");
const cloudinary = require("cloudinary");
// register new user 
exports.registerUser = catchAsyncErrors(async (req, res, next) => {
   const mycloud = await cloudinary.v2.uploader.upload(req.body.avatar, {
      folder: "avater",
      width: 150,
      crop: "scale",
   })

   //  this property will get from client site 
   const { name, email, password, avatar } = req.body;
   // now send user information on database 
   const user = await User.create({
      name, email, password,
      avatar: {
         public_id: mycloud.public_id,
         url: mycloud.secure_url,
      }
   });

   // after then i need to send message and status code Where i must includes is user crate successful or not 
   sendToken(user, 201, res)
   // if success thn status code will 201 otherwise 501 

});

// login function 

exports.loginUser = catchAsyncErrors(async (req, res, next) => {
   const { email, password } = req.body;
   if (!email || !password) {
      return next(new ErrorHandler("Please Enter a valid email & password", 400));
   }
   const user = await User.findOne({ email }).select("+password");


   if (!user) {
      return next(new ErrorHandler("invalid email or password", 401));
   }

   const isPasswordMatched = await user.comparePassword(password);
   if (!isPasswordMatched) {
      return next(new ErrorHandler("password does not match", 401));
   }
   sendToken(user, 200, res);
});


// logout function 

exports.logout = catchAsyncErrors(async (req, res, next) => {
   res.cookie("token", null, {
      expires: new Date(Date.now()),
      httpOnly: true,
   });
   res.status(200).json({
      success: true,
      message: "Logged out",
   });
});

// forgot password 
exports.forgotPassword = catchAsyncErrors(async (req, res, next) => {
   // first i need gmail for identify Which user make request for forgot password   
   const user = await User.findOne({ email: req.body.email });
   if (!user) {
      return next(new ErrorHandler("user not found", 404));

   };
   //    need new token for reset password 
   const resetToken = user.getResetPasswordToken();

   await user.save({ validateBeforeSave: false });
   //  send link to user,and user click this link for change her password 
   const resetPasswordUrl = `${req.protocol}://${req.get("host")}/password/reset/${resetToken}`;

   const message = `Your password reset token is :- \n\n ${resetPasswordUrl} \n\nIf you have not requested this email then, please ignore it.`;
   //  now send this message to user using nodemailer 
   try {
      await sendEmail({
         email: user.email,
         subject: `Health care password Recovery`,
         message,
      });
      res.status(200).json({
         success: true,
         message: `Email send to ${user.email} successfully`,
      });

   } catch (error) {
      user.resetPasswordToken = undefined;
      user.resetPasswordExpire = undefined;
      await user.save({ validateBeforeSave: false });
      return next(new ErrorHandler(error.message, 500));
   }

});

