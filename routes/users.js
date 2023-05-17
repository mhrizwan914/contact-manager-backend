// Create Express Server
const express = require("express");
const { postLogin, postRegister, getProfile } = require("../controllers/users");
const { token } = require("../middleware/accesstoken");

// Create Router
const router = express.Router();

// Login Request
router.route("/login").post(postLogin);
// Register Request
router.route("/register").post(postRegister);
// Profile Register
router.route("/profile").get(token, getProfile);

module.exports = router;