const { signup } = require('../../controllers/authentication/signup');
const { login } = require('../../controllers/authentication/login');
const { 
    signupValidators,
    loginValidators,
    checkInputsErrors 
} = require('../../middlewares');
const {
    LOGIN,
    SIGNUP,
} = require('../../const/routes');

const authenticationRoutes = (routes) => {  
    
    routes.post(LOGIN, loginValidators, checkInputsErrors, login);
    
    routes.post(SIGNUP, signupValidators, checkInputsErrors, signup);
}

module.exports = {
    authenticationRoutes
}