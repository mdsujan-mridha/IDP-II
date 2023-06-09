const express = require('express');
const app = express();
const jwt = require("jsonwebtoken");
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const errorMiddleWare = require('./midddleware/error');

app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));

// api version with route 
const user = require("./routes/userRoute");
const doctor = require("./routes/doctorRoute");


app.use("/api/v1",user);
app.use("/api/v1",doctor);

// middleware for catch error 
app.use(errorMiddleWare);

module.exports = app;