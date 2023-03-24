const Joi = require('joi')

const signupSchema = Joi.object({
  first_name: Joi.string().required(),
  last_name: Joi.string().required(),
  email: Joi.string().required(),
  password: Joi.string().required(),
})

const forgetPasswordSchema = Joi.object({
  email: Joi.string().required()
})

const restorePasswordSchema = Joi.object({
  password: Joi.string().required()
})

const validTagsCreate = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  imagen_url: Joi.string().required()
})


module.exports = {
  signupSchema,
  forgetPasswordSchema,
  restorePasswordSchema,
  validTagsCreate
}