const jwt = require("jsonwebtoken");

//vaild jwt or not
const checkLogin = (req, res, next) => {
    const { authorization } = req.headers;
    try {
        const decoder = jwt.verify(authorization, process.env.JWT_SECRET);
        const { id, username } = decoder;
        req.username = username;
        req.id = id;
        next();
    } catch (error) {
        console.log("Error: "+error);
        return res.status(401).json({ message: "Not authorized" });
    }
}

module.exports = checkLogin;
