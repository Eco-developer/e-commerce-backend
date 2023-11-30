const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Exclusive Api',
      description: 'An  API for an Ecommerce app.',
      version: '1.0.0',
    },
  },
  // looks for configuration in specified directories
  apis: ['./src/swagger/swaggerDocs.js'],
}

const swaggerSpec = swaggerJsdoc(options)

function swaggerConfig(app) {
  // Swagger Page
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

  // Documentation in JSON format
  app.get('/docs.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.send(swaggerSpec)
  })
}

module.exports = {
    swaggerConfig
} 