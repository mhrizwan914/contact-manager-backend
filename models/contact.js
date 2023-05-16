// Import Mongoose
const mongoose = require("mongoose");

// Create Contact Schema
const contact = mongoose.Schema({
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
    },
    time: { 
        type : Date, 
        default: Date.now 
    }
});

module.exports = mongoose.model("Contacts", contact);