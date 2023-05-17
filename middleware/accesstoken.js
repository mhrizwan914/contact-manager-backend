// Import async Handler 
const asyncHandler = require("express-async-handler");
// Import JWT Models 
const jwt = require("jsonwebtoken");

const token = asyncHandler(async (request, response, next) => {
    let checkToken;
    let auth = request.headers.Authorization || request.headers.authorization;
    if (auth && auth.startsWith("Bearer")) {
        checkToken = auth.split(" ")[1];
        jwt.verify(checkToken, process.env.SECRET_ACCESS_TOKEN, (error, decoded) => {
            if (error) {
                response.status(401);
                throw new Error("User is not Authorized");
            }
            // console.log(decoded);
            request.user = decoded.user;
            next();
        });
    }
    if (!checkToken) {
        response.status(401);
        throw new Error("Token is Missing");
    }
});

module.exports = { token };