const jwt = require("jsonwebtoken");
const ErrorHandler = require("../utils/ErrorHandler");

const User = require("../models/userModel");
const catchAsyncErrors = require("./catchAsyncErrors");


// i need to check is user authenticated or not if this user is not authenticated then i send error message and unAuthorize code 401 
exports.isAuthenticatedUser = catchAsyncErrors(async(req,res,next) =>{
     const {token} = req.cookies ;
     if(!token) {
        return next(new ErrorHandler("Please login to access this resource" ,401));
     }
     const decodedData = jwt.verify(token,process.env.JWT_SECRET);
     req.user = await User.findById(decodedData.id);

     next();
});


// if anyone try to access admin role then i need to verify this user have admin role or not, if user have admin role then i give access for admin dashboard and other function like CRUD operation one the other hand i send a message with unAuthorize stats code 403 

exports.authorizeRoles = (...roles) =>{
     return(req,res,next) =>{
         if(!roles.includes(req.user.role)){
            return next(new ErrorHandler(`Role: ${req.user.role} is not allowed to access this resource`,403));

         }
         next();
     }

}


