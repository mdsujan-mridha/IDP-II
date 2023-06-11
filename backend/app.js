const express = require('express');
const app = express();
const jwt = require("jsonwebtoken");
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const errorMiddleWare = require('./midddleware/error');
const fileUpload = require('express-fileupload');

app.use(express.json());

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(fileUpload());
const corsOptions = {
    origin: 'http://localhost:3000',
    'Content-Type': 'Authorization',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200
}
app.use(cors(corsOptions));
// api version with route 
const user = require("./routes/userRoute");
const doctor = require("./routes/doctorRoute");


app.use("/api/v1", user);
app.use("/api/v1", doctor);

// middleware for catch error 
app.use(errorMiddleWare);

module.exports = app;