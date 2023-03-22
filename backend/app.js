const express = require('express');
const app = express();
const cors = require("cors");
const userHandler = require("./routerHandler/userHandler")
require("./config/db")

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());


//aplication routers
app.use('/api/auth', userHandler);

// api version with route 


module.exports = app;