const express = require('express')
// const routesUsers = require('./users.routes')

// const isAuthenticatedByPassportJwt = require('../libs/passport')

const routesAuth = require('./auth.routes')
const routesUser = require('./user.routes')
const routesCountries = require('./countries.routes')
const routesCities = require('./cities.routes')
const routesTags = require('./tags.routes')

function routerModels(app) {
  const router = express.Router()

  app.use('/api/v1', router)
  router.use('/auth', routesAuth)
  router.use('/users', routesUser)
  router.use('/tags', routesTags)
  router.use('/countries', routesCountries)
  router.use('/cities', routesCities)
  
}

module.exports = routerModels
