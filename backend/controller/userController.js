const catchAsyncErrors = require("../midddleware/catchAsyncErrors");
const sendToken = require("../utils/jwtToken");

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

})

