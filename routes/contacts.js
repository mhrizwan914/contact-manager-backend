// Create Express Server
const express = require("express");
// Import Access Toke Middleware
const { token } = require("../middleware/accesstoken");
// Create Router
const router = express.Router();

// Import Controllers
const { getContacts, getContactsById, postContacts, putContacts, deleteContacts } = require("../controllers/contact");

// Private This Routes
router.use(token);

// Get & Post
router.route("/").get(getContacts).post(postContacts);

// Get, Put & Delete By Id 
router.route("/:id").get(getContactsById).put(putContacts).delete(deleteContacts);

module.exports = router;