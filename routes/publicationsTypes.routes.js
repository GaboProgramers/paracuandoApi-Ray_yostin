const express = require('express')
const router = express.Router()

// ? CONFIGURACION DEL ESQUEMA

/**
 * @swagger
 * components:
 *  schemas:
 *      PublicationsTypes: 
 *          type: object
 *          description: Se Recibiran las publicaciones por tipo
 *              
 */


/**
 * @swagger
 * /publications-types/:
 *  get:
 *      summary: Todas Las publicaciones
 *      tags: [PublicationsTypes]
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

router.get('/')

/**
 * @swagger
 * /publications-types/:id:
 *  get:
 *      summary: una publicacion en especifico
 *      tags: [PublicationsTypes]
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
 *              description: vista paginada de todas las publicaciones
 *          400:
 *              description: error case
 */

router.get('/:id')

/**
 * @swagger
 * /publications-types/:id:
 *  put:
 *      summary: Actualizar una publicacion
 *      tags: [PublicationsTypes]
 *      parameters:
 *              - in: header
 *                name: auth
 *                schema:
 *                  summary: 'Token'
 *                  description: 'Bearer Token administrador'
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
 *                          category: 
 *                            type: string
 *                            description: nuevo nombre de la categoria
 *                          calificacion:
 *                            type: integer
 *                            description: nueva calificacion de la publicacion
 *                      required:
 *                          - category
 *                          - calificacion
 *                      example:
 *                        category: moda
 *                        calificacion: 5.1
 *                
 *      responses:
 *          200:
 *              description: succes update
 *          400:
 *              description: error
 */

router.put('/:id')

module.exports = router