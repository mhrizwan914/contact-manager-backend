// Import async Handler 
const asyncHandler = require("express-async-handler");
// Import Users Models 
const Users = require("../models/users");
// Import Bcrypt Models 
const bcrypt = require("bcrypt");
// Import JWT Models 
const jwt = require("jsonwebtoken");
//@description Post User Login
//@route Post /api/users/login
//@access publuc
const postLogin = asyncHandler(async (request, response) => {
    const { email, password } = request.body;
    if (!email || !password) {
        response.status(400);
        throw new Error("All fields are mandatory");
    }
    const userCheck = await Users.findOne({ email });
    if (userCheck && (await bcrypt.compare(password, userCheck.password))) {
        const AccessToken = jwt.sign({
            user: {
                id: userCheck.id,
                username: userCheck.username,
                email: userCheck.email,
            }
        }, process.env.SECRET_ACCESS_TOKEN, { expiresIn: "1m" });
        response.status(201).json({ AccessToken });
    }else{
        response.status(401);
        throw new Error("Email or Password Are Wrong");
    }
});
//@description Post User Register
//@route Post /api/users/register
//@access publuc
const postRegister = asyncHandler(async (request, response) => {
    const { username, email, password } = request.body;
    if (!username || !email || !password) {
        response.status(400);
        throw new Error("All fields are mandatory");
    }
    const checkEmail = await Users.findOne({ email });
    if (checkEmail) {
        response.status(400);
        throw new Error("Email Already in Use");
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = await Users.create({
        username,
        email,
        password: hashPassword
    })
    response.status(201).json({
        message: "User Register Successfully",
        data: newUser
    });
});
//@description Get User Profile
//@route Get /api/users/profile
//@access private
const getProfile = asyncHandler(async (request, response) => {
    response.json(request.user);
});

module.exports = { postLogin, postRegister, getProfile };