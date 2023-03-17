const path = require('path')

const swaggerSpec = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'ParacuandoApi',
      version: '1.0.0'
    },
    servers: [
      {
        url: 'http://localhost:8000'
      }
    ]
  },
  apis: [`${path.join(__dirname, '../routes/auth.routes.js')}`]
}

module.exports = swaggerSpec