const express = require('express')
const { getCitiesPaginations } = require('../controllers/cities.controller')
const passport = require('../libs/passport')
const router = express.Router()

// ? CONFIGURACION DEL ESQUEMA

/**
 * @swagger
 * components:
 *  schemas:
 *      Cities: 
 *          type: object
 *          description: 'Se recibira una paginacion del usuario en sesion'
 *              
 */


/**
 * @swagger
 * /cities/:
 *  get:
 *      summary: vista paginada
 *      tags: [Cities]
 *      parameters:
 *              - in: header
 *                name: auth
 *                schema:
 *                  summary: 'Token'
 *                  description: 'Bearer Token'
 *      responses:
 *          200:
 *              description: vista paginada
 */

router.get('/',
  passport.authenticate('jwt', { session: false }),
  getCitiesPaginations
)


module.exports = router