const express = require('express')
const { getTagsPaginations, addTags, getTag } = require('../controllers/tags.controller')
const passport = require('../libs/passport')
const { isUserAdmin } = require('../middlewares/auth.middlewares')
const compareSchema = require('../schemas/joiSchema.checker')
const { validTagsCreate } = require('../schemas/auth.schemas')
const router = express.Router()

/**
 * @swagger
 * components:
 *  schemas:
 *      Tags: 
 *          type: object
 *          description: Se Recibiran las Tags
 *              
 */

/**
 * @swagger
 * /tags/:
 *  get:
 *      summary: paginacion de tags por querys
 *      tags: [Tags]
 *      parameters:
 *              - in: header
 *                name: auth
 *                schema:
 *                  summary: 'Token'
 *                  description: 'Bearer Token'
 *                required: true
 *              - in: query
 *                name: filter
 *                description: enviar los parametros por la query
 *                required: true
 *                explode: true
 *                schema:
 *                  type: string
 *                  default: available
 *                  enum:
 *                    - available 
 *                    - disable 
 *                    - delete 
 *                
 *      responses:
 *          200:
 *              description: vista paginada de todas las publicaciones
 */

router.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  getTagsPaginations
)

/**
 * @swagger
 * /tags/:
 *  post:
 *      summary: crear tags
 *      tags: [Tags]
 *      parameters:
 *              - in: header
 *                name: auth
 *                schema:
 *                  summary: 'Token'
 *                  description: 'Bearer Token del admin'
 *                required: true
 *      requestBody: 
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          name: 
 *                            type: string
 *                            description: nombre de la tags
 *                          description:
 *                            type: string
 *                            description: descripcion de la tags
 *                      required:
 *                          - name
 *                          - description
 *                      example:
 *                        name: Epic-game
 *                        description: Todo relacionado con video juegos
 *                
 *      responses:
 *          200:
 *              description: Tag Added
 *          400:
 *              description: error
 */

router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  compareSchema(validTagsCreate, 'body'),
  isUserAdmin,
  addTags
)

/**
 * @swagger
 * /tags/:id:
 *  get:
 *      summary: una tags en especifico
 *      tags: [Tags]
 *      parameters:
 *              - in: header
 *                name: auth
 *                schema:
 *                  summary: 'Token'
 *                  description: 'Bearer Token'
 *                required: true
 *              - in: path
 *                name: id
 *                required: true
 *                schema:
 *                  type: integer
 *                
 *      responses:
 *          200:
 *              description: vista especifica de un tags
 *          400:
 *              description: error case
 */

router.get(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  getTag
)

/**
 * @swagger
 * /tags/:id:
 *  put:
 *      summary: actualizar un tags
 *      tags: [Tags]
 *      parameters:
 *              - in: header
 *                name: auth
 *                schema:
 *                  summary: 'Token'
 *                  description: 'Bearer Token admin'
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
 *                          name: 
 *                            type: string
 *                            description: nombre de la tags
 *                          description:
 *                            type: string
 *                            description: descripcion de la tags
 *                      required:
 *                          - name
 *                          - description
 *                      example:
 *                        name: Epic-game
 *                        description: Todo relacionado con video juegos
 *                
 *      responses:
 *          200:
 *              description: tags update
 *          400:
 *              description: error case
 */
// ! faltan controladores
router.put('/:id',)

/**
 * @swagger
 * /tags/:id:
 *  delete:
 *      summary: eliminar un tags
 *      tags: [Tags]
 *      parameters:
 *              - in: header
 *                name: auth
 *                schema:
 *                  summary: 'Token'
 *                  description: 'Bearer Token admin'
 *                required: true
 *              - in: path
 *                name: id
 *                required: true
 *                schema:
 *                  type: integer
 *                
 *      responses:
 *          200:
 *              description: tags eliminate
 *          400:
 *              description: error case
 */

router.delete('/:id',)



module.exports = router