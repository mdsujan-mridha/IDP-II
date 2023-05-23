const ErrorHandler = require("../utils/ErrorHandler");

module.exports = (err,req,res,next) =>{
     err.statusCode  = err.statusCode || 500
     err.message = err.message || "Internal server error";

    //  Wrong mongoDB error 
    if(err.name === "CastError"){
        const message = `Resource not found with is id..Invalid ${err.patch}`;
        err = new ErrorHandler(message,400) 
    }

    res.status(err.statusCode).json({
        success:false,
        message:err.message,
    })
}

