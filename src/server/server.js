const express = require('express');
const cors = require('cors');
const { routes } = require('../routes/routes');
const { connectDb } = require('../database/db');
const { swaggerConfig } = require('../swagger/swaggerConfig');
require('dotenv').config();

class Server {
    app;
    port = process.env.PORT || '8084';
    apiPath = {
        routes: '/api/v1'
    }

    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
        this.dbConnection();
    }

    middlewares() {

        this.app.use( cors() );

        this.app.use( express.json() );

        swaggerConfig(this.app);
        
    }

    routes() {
        this.app.use( this.apiPath.routes,  routes );
    }

    async dbConnection() {
        connectDb().then(async () => {
            console.log(`database conected`)
        }).catch((err) => {console.log(err)});
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log(`App running on port -> ${this.port}`)
        });
    }
}

module.exports = {
    Server,
}