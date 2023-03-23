const RolesService = require('../services/roles.service')
const { getPagingData, getPagination } = require('../utils/helpers')

const rolesServices = new RolesService()

const getRolesPaginations = async (request, response, next) => {
  try {
    let query = request.query
    let { page, size } = query
    const { limit, offset } = getPagination(page, size, '10')
    query.limit = limit
    query.offset = offset

    let country = await rolesServices.findAndCount(query)
    const results = getPagingData(country, page, limit)
    return response.json({ results: results })
  }

  catch (error) {
    next(error)
  }
}

module.exports = {
  getRolesPaginations
}