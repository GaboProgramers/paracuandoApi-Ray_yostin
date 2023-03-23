const express = require('express')
const { getRolesPaginations } = require('../controllers/roles.controller')
const passport = require('../libs/passport')
const router = express.Router()

// ? CONFIGURACION DEL ESQUEMA

/**
 * @swagger
 * components:
 *  schemas:
 *      Roles: 
 *          type: object
 *          description: Se Recibiran todos los roles en la aplicacion
 *              
 */


/**
 * @swagger
 * /roles/:
 *  get:
 *      summary: Todos los roles
 *      tags: [Roles]
 *      parameters:
 *              - in: header
 *                name: auth
 *                schema:
 *                  summary: 'Token'
 *                  description: 'Bearer Token'
 *                required: true
 *                
 *      responses:
 *          200:
 *              description: Todos los roles succes
 */

router.get('/',
  passport.authenticate('jwt', { session: false }),
  getRolesPaginations
)

module.exports = router