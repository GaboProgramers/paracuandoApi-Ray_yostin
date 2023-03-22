const express = require('express')
const { getUserById, getUsers, getMyUser } = require('../controllers/user.controller')
const router = express.Router()
const passport = require('../libs/passport')

// ? CONFIGURACION DEL ESQUEMA

/**
 * @swagger
 * components:
 *  schemas:
 *      Users: 
 *          type: object
 *          description: Usuarios
 *              
 */


/**
 * @swagger
 * /users/:
 *  get:
 *      summary: vista paginada de usuarios
 *      tags: [Users]
 *      parameters:
 *              - in: header
 *                name: auth
 *                schema:
 *                  summary: 'Token'
 *                  description: 'Bearer Token administrador'
 *              - in: query
 *                name: filter user
 *                description: enviar los parametros por la query
 *                required: true
 *                explode: true
 *      responses:
 *          200:
 *              description: vista paginada
 */

router.get('/', getUsers)

/**
 * @swagger
 * /users/:id:
 *  get:
 *      summary: descripcion especifica de un usuario
 *      tags: [Users]
 *      parameters:
 *              - in: header
 *                name: auth
 *                schema:
 *                  summary: 'Token'
 *                  description: 'Bearer Token usuario en sesion'
 *                required: true
 *              - in: path
 *                name: id
 *                required: true
 *                schema:
 *                  type: integer
 *                
 *      responses:
 *          200:
 *              description: si el id del usuario encontrado es igual al id del usuario en sesion mostrar
 *          400:
 *              description: error
 */

router.get(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  getUserById)

/* router.get('/:id/votes')

router.get('/:id/publications') */

/**
 * @swagger
 * /users/:id:
 *  put:
 *      summary: actualizar un usuario
 *      tags: [Users]
 *      parameters:
 *              - in: header
 *                name: auth
 *                schema:
 *                  summary: 'Token'
 *                  description: 'Bearer Token usuario en sesion'
 *                required: true
 *              - in: path
 *                name: id
 *                required: true
 *                schema:
 *                  type: integer
 *      requestBody: 
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          first_name: 
 *                            type: string
 *                            description: nuevo nombre de la categoria
 *                          last_name:
 *                            type: string
 *                            description: nueva calificacion de la publicacion
 *                          country_id:
 *                            type: integer
 *                            description: nueva calificacion de la publicacion
 *                          code_phone:
 *                            type: integer
 *                            description: nueva calificacion de la publicacion
 *                          phone:
 *                            type: integer
 *                            description: nueva calificacion de la publicacion
 *                      required:
 *                          - first_name
 *                          - last_name
 *                          - country_id
 *                          - code_phone
 *                          - phone
 *                      example:
 *                        first_name: jon
 *                        last_name: doe
 *                        country_id: 3
 *                        code_phone: 57
 *                        phone: 123 3214563
 *                
 *      responses:
 *          200:
 *              description: Actualizar datos del usuario
 *          400:
 *              description: error
 */

router.put('/:id', getMyUser)

module.exports = router