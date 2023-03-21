const express = require('express')
const { getUserById, getUsers, getMyUser } = require('../controllers/user.controller')
const router = express.Router()
const passport = require('../libs/passport')

router.get('/', getUsers)

router.get(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  getUserById)

/* router.get('/:id/votes')

router.get('/:id/publications') */

router.put('/:id', getMyUser)

module.exports = router