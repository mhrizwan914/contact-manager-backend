// Import Mongoose
const mongoose = require("mongoose");

// Create Users Schema
const users = mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, "Please Add Username"]
        },
        email: {
            type: String,
            required: [true, "Please Add Email"],
            unique: [true, "Email Already Exit"]
        },
        password: {
            type: String,
            required: [true, "Please Add User Password"]
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("users", users);