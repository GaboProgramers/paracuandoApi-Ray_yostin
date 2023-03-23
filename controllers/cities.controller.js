const CitiesService = require('../services/cities.service')
const { getPagingData, getPagination } = require('../utils/helpers')

const citiesServices = new CitiesService()

const getCitiesPaginations = async (request, response, next) => {
  try {
    let query = request.query
    let { page, size } = query
    const { limit, offset } = getPagination(page, size, '10')
    query.limit = limit
    query.offset = offset

    let country = await citiesServices.findAndCount(query)
    const results = getPagingData(country, page, limit)
    return response.json({ results: results })
  }

  catch (error) {
    next(error)
  }
}

module.exports = {
  getCitiesPaginations
}