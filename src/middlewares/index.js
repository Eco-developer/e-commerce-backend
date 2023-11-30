const { signupValidators } = require('./validators/signupValidators');
const { loginValidators } = require('./validators/loginValidators');
const { checkInputsErrors } = require('./checkInputsErrors/checkInputsErrors');

module.exports = {
    signupValidators,
    loginValidators,
    checkInputsErrors,
}