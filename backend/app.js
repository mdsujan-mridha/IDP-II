const express = require('express');
const app = express();

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

app.use("/api/v1",user);

// middleware for catch error 
app.use(errorMiddleWare);

module.exports = app;