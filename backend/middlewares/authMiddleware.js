const jwt = require("jsonwebtoken");
const User = require("../db/userModel")
const asyncHandler = require("express-async-handler")

const authMiddleware = asyncHandler(async (req, resp, next) => {
    const auth = req.headers.authorization;
    if (auth && auth.startsWith("Bearer")) {
        try {
            const token = auth.split(" ")[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            req.user = await User.findById(decoded.id).select("-password")

            next();
        } catch (error) {
            resp.status(401);
            throw new Error("Not authorized, token failed");
        }
    }
    else {
        resp.status(401);
        throw new Error("No token found in header");
    }
})

module.exports = authMiddleware;