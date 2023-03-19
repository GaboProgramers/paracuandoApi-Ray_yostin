const express = require('express')
const router = express.Router()

const passport = require('../libs/passport')

const verifySchema = require('../schemas/joiSchema.checker')
const { signupSchema, forgetPasswordSchema, restorePasswordSchema } = require('../schemas/auth.schemas')

const { signUp, logIn, forgetPassword, restorePassword, userToken } = require('../controllers/auth.controller')

// ? CONFIGURACION DEL ESQUEMA

/**
 * @swagger
 * components:
 *  schemas:
 *      Auth: 
 *          type: object
 *          properties:
 *              first_name:
 *                  type: string
 *                  description: The firstname of the user
 *              last_name:
 *                  type: string
 *                  description: The lastname of the user
 *              email:
 *                  type: string
 *                  description: The email of the user
 *              password:
 *                  type: string
 *                  description: The password of the user
 *          required: 
 *              - first_name
 *              - last_name
 *              - email
 *              - password
 *          example:
 *              first_name: jon
 *              last_name: doe
 *              email: jondoe21@gmail.com
 *              password: pass1234
 *              
 */

// * Inicio de sesion

/**
 * @swagger
 * /auth/login:
 *  post:
 *      summary: Iniciar Sesion
 *      tags: [Auth]
 *      requestBody: 
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          email: 
 *                            type: string
 *                            description: Correo del usuario para iniciar sesion
 *                          password:
 *                            type: string
 *                            description: Contraseña del usuario para iniciar sesion
 *                      required:
 *                          - email
 *                          - password
 *                      example:
 *                        email: jondoe@gmail.com
 *                        password: pass1234
 *      responses:
 *          200:
 *              description: sesion iniciada.
 */


router.post('/login', logIn)

// * Documnetacion de Registro

/**
 * @swagger
 *  /auth/sign-up:
 *  post:
 *      summary: create User
 *      tags: [Auth]
 *      requestBody: 
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/Auth'
 *      responses:
 *          200:
 *              description: new user Create
 */

router.post('/sign-up', verifySchema(signupSchema, 'body'), signUp)

// * Documentacion Olvido contraseña

/**
 * @swagger
 * /auth/forget-password:
 *  post:
 *      summary: Olvido contraseña
 *      tags: [Auth]
 *      requestBody: 
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          email: 
 *                            type: string
 *                            description: Correo del usuario para iniciar sesion
 *                      required:
 *                          - email
 *                      example:
 *                        email: jondoe@gmail.com
 *      parameters:
 *          - name: email
 *            in: query
 *            description: The User Email For Login
 *            required: true
 *            schema:
 *                type: string
 *      responses:
 *          200:
 *              description: Email sended!, check your inbox
 */

router.post('/forget-password', verifySchema(forgetPasswordSchema, 'body'), forgetPassword)

// * Documentacion Cambio contraseña

/**
 * @swagger
 * /auth/change-password/:token:
 *  post:
 *      summary: Cambiar la contraseña de un usuario
 *      description: Cambia la contraseña de un usuario con el token proporcionado
 *      tags: [Auth]
 *      requestBody: 
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          password: 
 *                            type: string
 *                            description: password del usuario para cambiar
 *                      required:
 *                          - password
 *                      example:
 *                        password: pass1234
 *      parameters:
 *          - name: password
 *            in: query
 *            description: Token de Autenticacion del usuario
 *            required: true
 *            schema:
 *                type: string
 *          - name: token
 *            in: path
 *            description: Nueva contraseña del usuario
 *            required: true
 *            schema:
 *                type: string
 *      responses:
*       200:
*         description: Contraseña cambiada con éxito
*       400:
*         description: El token es inválido o la contraseña no cumple con los requisitos
*       401:
*         description: No se pudo autenticar el usuario
*/

router.post('/change-password/:token', verifySchema(restorePasswordSchema, 'body'), restorePassword)



router.get(
  '/me',
  passport.authenticate('jwt', { session: false }),
  userToken
);

router.get(
  '/testing',
  passport.authenticate('jwt', { session: false }),
  async (request, response, next) => {
    try {
      return response.status(200).json({
        results: {
          user: request.user,
          isAuthenticated: request.isAuthenticated(),
          isUnauthenticated: request.isUnauthenticated(),
          _sessionManager: request._sessionManager,
          authInfo: request.authInfo,
        },
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
);

module.exports = router
