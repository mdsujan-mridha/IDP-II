const nodemailer  = require("nodemailer");


const sendEmail = async(options) =>{
    let testAccount = await nodemailer.createTestAccount();
    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: 'hans.koepp11@ethereal.email', // generated ethereal user
          pass: '9Nbk4u9GBgDZjMBp9n', // generated ethereal password
        },
      });


       const mailOptions ={
        from:"sujan@gmail.com",
        to:options.email,
        subject:options.subject,
        text:options.message
       }

       await transporter.sendEmail(mailOptions);

}

module.exports  = sendEmail;