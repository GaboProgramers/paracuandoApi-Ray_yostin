const express = require('express')
const router = express.Router()

const passport = require('../libs/passport')

const verifySchema = require('../schemas/joiSchema.checker')
const { signupSchema, forgetPasswordSchema, restorePasswordSchema } = require('../schemas/auth.schemas')

const { signUp, logIn, forgetPassword, restorePassword, userToken } = require('../controllers/auth.controller')


router.post('/login', logIn)

// * Documnetacion de Registro
/**
 * @swagger
 * components:
 *  schemas:
 *      Auth: 
 *          type: object
 *          properties:
 *              firs_tname:
 *                  type: string
 *                  description: The firstname of the user
 *              last_name:
 *                  type: string
 *                  description: The lastname of the user
 *              username:
 *                  type: string
 *                  description: The username of the user
 *              email:
 *                  type: string
 *                  description: The email of the user
 *              password:
 *                  type: string
 *                  description: The password of the user
 *          required: 
 *              - first_name
 *              - last_name
 *              - username
 *              - email
 *              - password
 *          example:
 *              first_name: jon
 *              last_name: doe
 *              username: JonDoe
 *              email: jondoe21@gmail.com
 *              password: pass1234
 *              
 */

/**
 * @swagger
 * /api/v1/auth/signup:
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
 *          404: 
 *              description: Datos Erroneos
 *          500: 
 *              description: Error Server
 */
router.post('/sign-up', verifySchema(signupSchema, 'body'), signUp)

router.post('/forget-password', verifySchema(forgetPasswordSchema, 'body'), forgetPassword)

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
