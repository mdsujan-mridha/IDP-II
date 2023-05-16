const catchAsyncErrors = require("../midddleware/catchAsyncErrors");
const sendToken = require("../utils/jwtToken");
const ErrorHandler = require("../utils/ErrorHandler");
const User = require("../models/userModel");
// register new user 
exports.registerUser = catchAsyncErrors(async (req, res, next) => {
    //  this property will get from client site 
    const{name,email,password,avatar} = req.body;
    // now send user information on database 
    const user = await User.create({
         name,email,password,
         avatar:{
            public_id:"This is a sample id",
            url:"profilePicUrl",
         }
    });
    
    // after then i need to send message and status code Where i must includes is user crate successful or not 
    sendToken(user,201,res)
    // if success thn status code will 201 otherwise 501 

});

// login function 

exports.loginUser = catchAsyncErrors(async(req,res,next) =>{
     const {email , password} = req.body;
      if(!email || !password){
         return next(new ErrorHandler("Please Enter a valid email & password" ,400));
      }
     const user = await User.findOne({ email }).select("+password");
     

     if(!user){
        return next(new ErrorHandler("invalid email or password" ,401));
     }

    const isPasswordMatched = await user.comparePassword(password);
     if(!isPasswordMatched){
        return next(new ErrorHandler("password does not match",401));
     } 
  sendToken(user,200,res);


}) 


