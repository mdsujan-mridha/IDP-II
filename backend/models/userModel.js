const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
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

});

  
// save hash password on backend 
userSchema.pre("save",async function(next){
    if(!this.isModified("password")){
        next();
    }
   this.password = await bcrypt.hash(this.password,10); 
})

//compare password

userSchema.methods.comparePassword = async function(enterPassword){
    return await bcrypt.compare(enterPassword,this.password);
};

// get reset password token 
userSchema.methods.getResetPasswordToken = function(){
    // create token 
    const resetToken = crypto.randomBytes(20).toString("hex"); 
   //  hashing and adding resetPasswordToken to user schema 
   this.resetPasswordToken = crypto
   .createHash("sha256")
   .update(resetToken)
   .digest("hex");

   this.resetPasswordToken = Date.now()+ 15 * 60 * 1000;
   return resetToken;
};


module.exports = mongoose.model("User",userSchema);


