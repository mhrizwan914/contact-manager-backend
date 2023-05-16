// Create Express Server
const express = require("express");
const { errorHandler } = require("./middleware/error-handler");
const { dbConnection } = require("./configs/db-connection");

// Create Dotenv Config
const dotenv = require("dotenv").config();

// Create App Using Express
const app = express();

// Create Server Port
const port = process.env.PORT || 3000;

// Create Middleware
app.use(express.json());

// Config DB Connection
dbConnection();

// Routes For 
    // Get
    // app.get("/api/contacts", (request, response) => {
    //     response.send("Succefully Get All Contacts").status(200);
    //     We Cann Alos Pass Response as a JSON
    //     response.json({
    //         message: "Succefully Get All Contacts"
    //     }).status(200);
    // });
    // Get
    app.use("/api/contacts/", require("./routes/contacts"));

// Custom Middleware
app.use(errorHandler);

// Listen App Port
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});