// Import async Handler 
const asyncHandler = require("express-async-handler");
// Import Contacts Models 
const Contact = require("../models/contact");
//@description Get All Contacts
//@route Get /api/contacts
//@access publuc
const getContacts = asyncHandler(async (request, response) => {
    const contacts = await Contact.find();
    response.json({
        message: "Succefully Get All Contacts",
        status: 200,
        data: contacts
    }).status(200);
});
//@description Get Contacts By Id
//@route Get /api/contacts/:id
//@access publuc
const getContactsById = asyncHandler(async (request, response) => {
    const contacts = await Contact.findById(request.params.id);
    if(!contacts){
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
//@access publuc
const postContacts = asyncHandler(async (request, response) => {
    // console.log("The request body is:", request.body);
    const { name, email, phone } = request.body;
    if (!name || !email || !phone) {
        response.status(400);
        throw new Error("All fields are mandatory");
    }
    const contacts = await Contact.create({
        name,
        email,
        phone
    });
    response.json(contacts).status(201);
});
//@description Put Existing Contacts
//@route Get /api/contacts/:id
//@access publuc
const putContacts = asyncHandler(async (request, response) => {
    response.json({
        message: `Update Specefic Contact ${request.params.id}`
    }).status(200);
});
//@description Delete Existing Contacts
//@route Get /api/contacts/:id
//@access publuc
const deleteContacts = asyncHandler(async (request, response) => {
    response.json({
        message: `Delete Specefic Contact ${request.params.id}`
    }).status(200);
});

module.exports = { getContacts, getContactsById, postContacts, putContacts, deleteContacts };