const PublicationsService = require('../services/publications.service')
const publicationsService = new PublicationsService()


const addPublications = async (request, response, next) => {
  try {

    const { id } = request.user

    const { title, description, context, reference_link, publication_type_id, city_id } = request.body

    let publication = await publicationsService.createPublication({
      user_id: id,
      title,
      description,
      context,
      reference_link,
      city_id,
      publication_type_id
    })

    return response
      .status(201)
      .json({
        result: publication
      })

  } catch (error) {
    next(error)
  }
}


module.exports = {
  addPublications
}