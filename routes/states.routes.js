const express = require('express')
const router = express.Router()

// ? CONFIGURACION DEL ESQUEMA

/**
 * @swagger
 * components:
 *  schemas:
 *      States: 
 *          type: object
 *          description: Se Recibiran todos los estados de la aplicacion
 *              
 */


/**
 * @swagger
 * /states/:
 *  get:
 *      summary: Todos los roles
 *      tags: [States]
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
 *              description: Todos los states succes
 */

router.get('/')

module.exports = router