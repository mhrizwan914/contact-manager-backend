const constants = require("../constants");

const errorHandler = (error, request, response, next) => {
    const statusCode = response.statusCode ? response.statusCode : 500;
    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            response.json({
                title: "Validation Error",
                message: error.message,
                stackTrace: error.stack
            });
            break;
        case constants.UNATHORIZED:
            response.json({
                title: "Unathorize Error",
                message: error.message,
                stackTrace: error.stack
            });
            break;
        case constants.FORBIDDEN:
            response.json({
                title: "Forbidden Error",
                message: error.message,
                stackTrace: error.stack
            });
            break;
        case constants.NOT_FOUND:
            response.json({
                title: "Not Found Error",
                message: error.message,
                stackTrace: error.stack
            });
            break;
        case constants.SERVER_ERROR:
            response.json({
                title: "Server Error",
                message: error.message,
                stackTrace: error.stack
            });
            break;
        default:
            console.log("No Error Found, All Goods");
    }
};

module.exports = { errorHandler };