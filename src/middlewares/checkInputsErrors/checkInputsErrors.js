const  { validationResult } = require("express-validator");

const checkInputsErrors = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).send({ 
            data: null,
            status: 400,
            message: errors.array().map(error => error.msg) 
        });
    } else {
        next()
    }
}

module.exports = {
    checkInputsErrors
}