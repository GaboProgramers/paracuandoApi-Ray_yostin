const express = require('express')
const { addPublications } = require('../controllers/publications.controller')
const passport = require('../libs/passport')
const { multerPublicationsPhotos } = require('../middlewares/multer.middleware')
const router = express.Router()

router.post(
  '/',
  passport.authenticate('jwt', { session: false }),
  addPublications)

module.exports = router