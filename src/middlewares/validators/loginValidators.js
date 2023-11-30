const  { body } = require("express-validator");

const loginValidators = [
    body("email")
    .trim()
    .escape()
    .notEmpty()
    .withMessage('The email is required.'),
    body("password")
    .trim()
    .escape()
    .notEmpty()
    .withMessage('The password is required.'),
]

module.exports = {
    loginValidators
}