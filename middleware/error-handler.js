const constants = require("../constants");

const errorHandler = (error, request, response, next) => {
    const status = response.status ? response.status : 500;
    console.log(status)
    switch (status) {
        case constants.VALIDATION_ERROR:
            response.json({
                title: "Validation Error",
                message: error.message,
                stackTrace: error.stack
            })
            break;
        case constants.UNATHORIZED:
            response.json({
                title: "Unathorize Error",
                message: error.message,
                stackTrace: error.stack
            })
            break;
        case constants.FORBIDDEN:
            response.json({
                title: "FORBIDDEN Error",
                message: error.message,
                stackTrace: error.stack
            })
            break;
        case constants.NOT_FOUND:
            response.json({
                title: "Not Found Error",
                message: error.message,
                stackTrace: error.stack
            })
            break;
        case constants.SERVER_ERROR:
            response.json({
                title: "Server Error",
                message: error.message,
                stackTrace: error.stack
            })
            break;
        default:
            console.log("No Error Found, All Goods");
    }
};

module.exports = { errorHandler };