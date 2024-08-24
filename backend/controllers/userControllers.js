const asyncHandler = require("express-async-handler");
const User = require("../db/userModel");
const generateToken = require("../config/generateToken")

const registerUser = asyncHandler(async (req, resp) => {
    const { name, email, password, pic } = req.body;
    console.log("Input: ", name, email, password, pic)

    if (!name || !email || !password) {
        resp.status(400);
        throw new Error("Please Enter all the Fields")
    }

    const userExists = await User.findOne({ email: email });

    if (userExists) {
        resp.status(400);
        throw new Error("User already exists")
    }

    // Create user 
    const newUser = await User.create({
        name: name,
        email: email,
        password: password,
        pic: pic
    });

    if (newUser) {
        resp.status(201).json({
            msg: "User registered successfully",
            _id: newUser._id,
            name: newUser.name,
            email: newUser.email,
            isAdmin: newUser.isAdmin,
            pic: newUser.pic,
            token: generateToken(newUser._id),
        })
    } else {
        resp.status(400).send("Creating user failed.")
    }
})

const loginUser = asyncHandler(async (req, resp) => {
    const { email, password } = req.body;

    const userExists = await User.findOne({ email: email })
    if (userExists) {
        if (userExists.matchPassword(password)) {
            resp.status(201).json({
                msg: "Login Successful",
                _id: userExists._id,
                name: userExists.name,
                token: generateToken(userExists._id)
            })
        }
    }
})

// /api/users?name=hehe&email=ehe@gmail.com
const allUsers = asyncHandler(async (req, resp) => {
    const query = req.query;

    if (query.search) {
        const keyword = {
            $or: [
                { name: { $regex: query.search, $options: "i" } },
                { email: { $regex: query.search, $options: "i" } }
            ]
        }
        const users = await User.find(keyword).find({ _id: { $ne: req.user._id } });

        resp.send(users);
    }

})

module.exports = { registerUser, loginUser, allUsers }