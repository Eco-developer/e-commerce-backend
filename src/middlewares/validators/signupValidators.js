const  { body } = require("express-validator");
const { 
    REGEX_EMAIL,
    REGEX_PASSWORD,
} = require("../../const/regex");

const signupValidators = [
    body("name")
    .trim()
    .escape()
    .notEmpty()
    .withMessage('The name is required.')
    .isLength({max: 20})
    .withMessage("The name mustn't have more than 20 characters."),
    body("lastname")
    .trim()
    .escape()
    .notEmpty()
    .withMessage('The lastname is required.')
    .isLength({max: 20})
    .withMessage("The lastname mustn't have more than 20 characters."),
    body("email")
    .trim()
    .escape()
    .notEmpty()
    .withMessage('The email is required.')
    .matches(REGEX_EMAIL)
    .withMessage('Invalid email format.'),
    body("phone")
    .trim()
    .escape()
    .isLength({max: 15})
    .withMessage("The phone mustn't have more than 15 characters."),
    body("password")
    .trim()
    .escape()
    .notEmpty()
    .withMessage('The password is required.')
    .matches(REGEX_PASSWORD)
    .withMessage('Invalid password format.'),
    body('password_confirmation')
    .custom((value, { req }) => {
        return value === req.body.password;
    })
    .withMessage('Both passwords must be the same.'),
]

module.exports = {
    signupValidators
}