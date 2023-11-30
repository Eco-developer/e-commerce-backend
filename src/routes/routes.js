const express = require('express');
const { authenticationRoutes } = require('./authentication/authentication.routes');

const routes = express.Router();

authenticationRoutes(routes);

module.exports = {
    routes,
}