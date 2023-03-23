const express = require('express')
const { getCountryPaginations } = require('../controllers/country.controller')
const passport = require('../libs/passport')
const router = express.Router()

// ? CONFIGURACION DEL ESQUEMA

/**
 * @swagger
 * components:
 *  schemas:
 *      Countrys: 
 *          type: object
 *          description: Se recibira una paginacion del usuario en sesion
 *              
 */


/**
 * @swagger
 * /countries/:
 *  get:
 *      summary: vista paginada de todos los country
 *      tags: [Countrys]
 *      parameters:
 *              - in: header
 *                name: auth
 *                schema:
 *                  summary: 'Token'
 *                  description: 'Bearer Token'
 *      responses:
 *          200:
 *              description: vista paginada de todos los country
 */

router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  getCountryPaginations
)


module.exports = router