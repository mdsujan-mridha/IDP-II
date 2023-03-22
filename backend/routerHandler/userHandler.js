const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
require('dotenv').config({path:"./config/.env" });
const User = require("../modles/user.model");
const jwt = require('jsonwebtoken');
const checkLogin = require("../config/checkLogin");


const maxAge = 3*60*60;
const jwtSecret = process.env.JWT_SECRET;
console.log(process.env.JWT_SECRET)

router.post("/signup", async(req, res) => {

    try {
        //Check user already exist or not?
        const user = await User.findOne({ username: req.body.username });
        if(user){
            return res.status(400).json({
                message: "Username already taken",
            });
        }
        const { username, name, password } = req.body;
        //Hash passowrd
        const hashedPassword = await bcrypt.hash(password, 10); 
        const newUser = new User ({
            username: username,
            name: name,
            password: hashedPassword,
        });
        // save in db
        await newUser.save().then((user) => {
        //genarate jwt token
            const token = jwt.sign({       
                id: user._id,
                username: user.username,
            }, jwtSecret, { expiresIn: maxAge,})
            //set cookies
            res.cookie("token", token, {
                httpOnly: true,
                maxAge: maxAge * 1000,
            });
            res.status(200).json({
                message: "User signup successfully",
                success: true,
            });
        }).catch((error) => {
            res.status(400).json({
                error: error.message,
                success: false,
            });
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: error.message,
        });
    }

});

router.post("/login", async(req, res) => {
    const { username, password } = req.body;
    //Check username and password provide or not
    if(!username && !password) {
        return res.status(400).json({
            message: "Username or password not present",
            success: false,
        });
    }
    try {
        const user = await User.findOne({username});     //user valid or not
        if(!user) {
            return res.status(400).json({
                message: "invalid username or password",
                success: false,
            });
        } else {
            bcrypt.compare(password, user.password, function(err, result) {
                if(result) {
                    //genarate jwt token
                    const token = jwt.sign({
                        id: user._id,
                        username: user.username,
                    }, jwtSecret, { expiresIn: maxAge,})
                    //set cookies
                    res.cookie("token", token, {
                        httpOnly: true,
                        maxAge: maxAge * 1000,
                    });

                    return res.status(200).json({
                        message: "User login successfully",
                        success: true,
                    });
                } else {
                    console.log(error);
                    return res.status(500).json({
                            error: error.message,
                            });
                }
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: error.message,
        });
    }
});

router.get("/logout", checkLogin, (req, res, next) => {
    //Clear token from cookies
    res.clearCookie('token');
    res.status(200).send('Logout successful');
});

router.get("/users", async (req, res) => {
        await User.find({}).then((users) => {
            const userData = users.map(user => {
                const container = {
                    username: user.username,
                    name: user.name,
                }
                return container;
            })
            res.status(200).json({user: userData});
        }).catch((error) => {
            rawListeners.status(401).json({
                error: error.message,
                success: false,
            });
        })
});




module.exports = router;