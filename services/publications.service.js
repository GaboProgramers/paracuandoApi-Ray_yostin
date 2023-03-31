const { Op, cast, literal } = require('sequelize')
const models = require('../database/models')
const { CustomError } = require('../utils/helpers')
const { v4: uuid4 } = require('uuid');
const uuid = require('uuid')
// const { CustomError } = require('../utils/helpers')

class PublicationsService {
  constructor() {

  }

  async findAndCount(query) {
    const { limit, offset, tags } = query

    const options = {
      where:{},
      attributes: {
        include: [
          [cast(literal('(SELECT COUNT(*) FROM "votes" WHERE "votes"."publication_id" = "Publications"."id")'), 'integer'), 'votes_count']
        ]
      }
    }

    if (limit && offset) {
      options.limit = limit
      options.offset = offset
    }

    const { title } = query
    if (title) {
      options.where.title = { [Op.iLike]: `%${title}%` }
    }

    const { description } = query
    if (description) {
      options.where.description = { [Op.iLike]: `%${description}%` }
    }

    //Necesario para el findAndCountAll de Sequelize
    options.distinct = true

    const publications = await models.Publications.findAndCountAll(options)
    return publications
  }

  async createPublication({ profile_id, publication_type_id, title, description, content, tags }) {
    const transaction = await models.sequelize.transaction()

    try {
      let newPublication = await models.Publications.create({
        id: uuid.v4(),
        user_id: profile_id,
        publication_type_id: publication_type_id,
        title: title,
        description: description,
        content: content,
        city_id: 'DEFAULT_CITY',
      }, { transaction })

      /*--->        Aquí añadimos las tags         <--- */

      /* Primero encontramos las tags que nos enviaron en el body como tags=1,2,5,8,10  */		

      if (tags){
        let arrayTags = tags.split(',')
        let findedTags = await models.Tags.findAll({
          where: { id: arrayTags },
          attributes: ['id'],
          raw: true,
        })

        /* Si son tags que sí existen, lo pasamos a la función que nos setea las relaciones */

        if (findedTags.length > 0) {
          let tags_ids = findedTags.map(tag => tag['id'])
          await newPublication.setTags(tags_ids, { transaction })
        }
      }
		
      /* Listo  */
      

      await transaction.commit()
      return newPublication
    } catch (error) {
      await transaction.rollback()
      throw error
    }
  }


}

module.exports = PublicationsService