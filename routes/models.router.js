const express = require('express')
// const routesUsers = require('./users.routes')

// const isAuthenticatedByPassportJwt = require('../libs/passport')

const routesAuth = require('./auth.routes')
const routerPublicationsType = require('./publicationsTypes.routes')
const routerStates = require('./states.routes')
const routerRoles = require('./roles.routes')

function routerModels(app) {
  const router = express.Router()

  app.use('/api/v1', router)
  router.use('/auth', routesAuth)
  router.use('/publications-types', routerPublicationsType)
  router.use('/states', routerStates)
  router.use('/roles', routerRoles)
}

module.exports = routerModels
