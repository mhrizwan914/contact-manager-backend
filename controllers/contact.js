// Import async Handler 
const asyncHandler = require("express-async-handler");
// Import Contacts Models 
const Contact = require("../models/contact");
//@description Get All Contacts
//@route Get /api/contacts
//@access private
const getContacts = asyncHandler(async (request, response) => {
    const contacts = await Contact.find({ user: request.user.id });
    response.json({
        message: "Succefully Get All Contacts",
        status: 200,
        data: contacts
    }).status(200);
});
//@description Get Contacts By Id
//@route Get /api/contacts/:id
//@access private
const getContactsById = asyncHandler(async (request, response) => {
    const contacts = await Contact.findById(request.params.id);
    if (!contacts) {
        response.status(404);
        throw new Error("Data Not Found");
    }
    response.json({
        message: `Get Specefic Contact ${request.params.id}`,
        data: contacts
    }).status(200);
});
//@description Post New Contacts
//@route Get /api/contacts/
//@access private
const postContacts = asyncHandler(async (request, response) => {
    // console.log("The request body is:", request.body);
    const { name, email, phone } = request.body;
    if (!name || !email || !phone) {
        response.status(400);
        throw new Error("All fields are mandatory");
    }
    const contacts = await Contact.create({
        user: request.user.id,
        name,
        email,
        phone
    });
    response.json(contacts).status(201);
});
//@description Put Existing Contacts
//@route Get /api/contacts/:id
//@access private
const putContacts = asyncHandler(async (request, response) => {
    const contacts = await Contact.findByIdAndUpdate(request.params.id, request.body, { new: true });
    if (contacts.user.toString() !== request.user.id) {
        response.status(403);
        throw new Error("You Dont Have Permission");
    }
    response.json({
        message: `Update Specefic Contact ${request.params.id}`,
        data: contacts
    }).status(200);
});
//@description Delete Existing Contacts
//@route Get /api/contacts/:id
//@access private
const deleteContacts = asyncHandler(async (request, response) => {
    const contacts = await Contact.findByIdAndRemove(request.params.id);
    if (!contacts) {
        response.status(404);
        throw new Error("Data Not Found");
    }
    if (contacts.user.toString() !== request.user.id) {
        response.status(403);
        throw new Error("You Dont Have Permission");
    }
    response.json({
        message: `Delete Specefic Contact ${request.params.id}`,
        data: contacts
    }).status(200);
});

module.exports = { getContacts, getContactsById, postContacts, putContacts, deleteContacts };