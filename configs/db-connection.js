// Import Mongoose
const mongoose = require("mongoose");

// Create Connection
const dbConnection = async () => {
    try {
        const connect = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("Database Connected Succeessfully", connect.connection.host, connect.connection.name);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

module.exports = { dbConnection };