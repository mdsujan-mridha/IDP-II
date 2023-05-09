
const sendToken = (user,statusCode,res) =>{
    //   if successfully create user then i need to set token in cookies 
    const token = user.getJWTToken();

    //  options for cookies 
    const options = {
         expires: new Date(
            Date.now()+process.env.COOKIES_EXPIRE * 24 * 60 *600* 1000
         ),
         httpOnly:true,
    };

    res.status(statusCode).cookie("token",token,options).json({
        success:true,
        user,
        token,
    });
};



module.exports = sendToken;