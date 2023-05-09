const mongoose = require("mongoose");
const validator = require("validator");



// create a user schema 
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter  your name"],
        maxLength: [30, "Name can not be exceed 30 characters"],
        minLength: [4, "Name should have more then 4 characters"],

    },
    email: {
        type: String,
        required: [true, "Enter  your Email"],
        unique: true,
        validate: [validator.isEmail, "Please enter a valid Email"],
    },
    password: {
        type: String,
        required: [true, "Please enter your password"],
        minLength: [8, "Password should be gether then 8 characters"],
        select: false,

    },
    avatar: {
        public_id: {
            type: String,
            required: true,

        },
        url: {
            type: String,
            required: true,
        },
        role:{
            type:String,
            default:"user",
        },
    },
    resetPasswordToken:String,
    resetPasswordExpire:Date,

})


module.exports = mongoose.model("User",userSchema);



