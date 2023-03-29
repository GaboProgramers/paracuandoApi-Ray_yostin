const { Op } = require('sequelize')
const models = require('../database/models')
const { CustomError } = require('../utils/helpers')
const { v4: uuid4 } = require('uuid');
// const { CustomError } = require('../utils/helpers')

class PublicationsService {
  constructor() {

  }

  async findAndCount(query) {
    const options = {
      where: {},
    }

    const { limit, offset } = query
    if (limit && offset) {
      options.limit = limit
      options.offset = offset
    }

    const { id } = query
    if (id) {
      options.where.id = id
    }

    const { name } = query
    if (name) {
      options.where.name = { [Op.iLike]: `%${name}%` }
    }

    //Necesario para el findAndCountAll de Sequelize
    options.distinct = true

    const publications = await models.Publications.findAndCountAll(options)
    return publications
  }

  async createPublication(obj) {
    const transaction = await models.sequelize.transaction()

    try {
      let newPublications = await models.Publications.create({
        id: uuid4(),
        publication_type_id: obj.publication_type_id,
        city_id: obj.city_id,
        title: obj.title,
        user_id: obj.user_id,
        description: obj.description,
        context: obj.context,
        reference_link: obj.reference_link
      }, { transaction })

      await transaction.commit()
      return newPublications

    } catch (error) {
      await transaction.rollback()
      throw error
    }
  }

  // async getPublicationType(id) {
  //   let publicationType = await models.Publicationtypes.findByPk(id)
  //   if (!publicationType) throw new CustomError('Not found PublicationType', 404, 'Not Found')
  //   return publicationType
  // }

  // async updatedPublicationType(id, obj) {
  //   const transaction = await models.sequelize.transaction()
  //   try {
  //     let publicationType = await models.Publicationtypes.findByPk(id)

  //     if (!publicationType) throw new CustomError('Not found PublicationType', 404, 'Not Found')

  //     let updatedPublicationType = await publicationType.update(obj, { transaction })

  //     await transaction.commit()
  //     return updatedPublicationType

  //   } catch (error) {
  //     await transaction.rollback()
  //     throw error
  //   }
  // }
}

module.exports = PublicationsService