const PublicationsTypesService = require('../services/publicationsTypes.service')
const { getPagingData, getPagination } = require('../utils/helpers')

const publicationsTypesService = new PublicationsTypesService()

const getPublicationsTypesPaginations = async (request, response, next) => {
  try {
    let query = request.query
    let { page, size } = query
    const { limit, offset } = getPagination(page, size, '10')
    query.limit = limit
    query.offset = offset

    let publicationType = await publicationsTypesService.findAndCount(query)
    const results = getPagingData(publicationType, page, limit)
    return response.json({ results: results })
  }

  catch (error) {
    next(error)
  }
}

const getPublicationType = async (request, response, next) => {
  try {
    const { id } = request.params
    const publicationType = await publicationsTypesService.getPublicationType(id)

    return response.status(200).json({ result: publicationType })
  } catch (error) {
    next(error)
  }
}

const updatePublicationType = async (request, response, next) => {
  try {
    let { id } = request.params

    let { name, description } = request.body

    let publicationType = await publicationsTypesService.updatedPublicationType(id, { name, description })

    return response.status(200).json({ 'message': 'Succes Update', results: publicationType })
  }
  catch (error) {
    next(error)
  }
}

module.exports = {
  getPublicationsTypesPaginations,
  getPublicationType,
  updatePublicationType
}