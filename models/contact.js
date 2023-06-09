// Import Mongoose
const mongoose = require("mongoose");

// Create Contact Schema
const contact = mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: [true, "Please Add Name"],
            ref: "users"
        },
        name: {
            type: String,
            required: [true, "Please Add Name"]
        },
        email: {
            type: String,
            required: [true, "Please Add Email"]
        },
        phone: {
            type: String,
            required: [true, "Please Add Phone"]
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Contacts", contact);