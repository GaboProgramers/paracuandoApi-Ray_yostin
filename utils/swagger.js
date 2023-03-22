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
        url: 'http://localhost:8000/api/v1'
      }
    ]
  },
  apis: [
    `${path.join(__dirname, '../routes/auth.routes.js')}`,
    `${path.join(__dirname, '../routes/cities.routes.js')}`,
    `${path.join(__dirname, '../routes/countries.routes.js')}`,
    `${path.join(__dirname, '../routes/publicationsTypes.routes.js')}`,
    `${path.join(__dirname, '../routes/roles.routes.js')}`,
    `${path.join(__dirname, '../routes/states.routes.js')}`,
    `${path.join(__dirname, '../routes/tags.routes.js')}`,
    `${path.join(__dirname, '../routes/user.routes.js')}`
  ]
}

module.exports = swaggerSpec