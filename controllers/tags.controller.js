const TagsService = require('../services/tags.service')
const { getPagingData, getPagination } = require('../utils/helpers')

const tagsServices = new TagsService()

const getTagsPaginations = async (request, response, next) => {
  try {
    let query = request.query
    let { page, size } = query
    const { limit, offset } = getPagination(page, size, '10')
    query.limit = limit
    query.offset = offset

    let country = await tagsServices.findAndCount(query)
    const results = getPagingData(country, page, limit)
    return response.json({ results: results })
  }

  catch (error) {
    next(error)
  }
}

const addTags = async (request, response, next) => {
  try {
    let { name, description, imagen_url } = request.body
    let tag = await tagsServices.createTags({ name, description, imagen_url })

    return response
      .status(201)
      .json({
        result: tag
      })

  } catch (error) {
    next(error)
  }
}

const getTag = async (request, response, next) => {
  try {
    const { id } = request.params
    const tag = await tagsServices.getTag(id)

    return response.status(200).json({ result: tag })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  getTagsPaginations,
  addTags,
  getTag
}