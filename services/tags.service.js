const { Op } = require('sequelize')
const models = require('../database/models')
const uuid = require('uuid')
const { CustomError } = require('../utils/helpers')

class TagsService {
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

    const tags = await models.Tags.findAndCountAll(options)
    return tags
  }

  async createTags(obj) {
    const transaction = await models.sequelize.transaction()
    try {
      let newTags = await models.Tags.create({
        id: 10,
        name: obj.name,
        description: obj.description,
        imagen_url: obj.imagen_url
      }, { transaction })

      await transaction.commit()
      return newTags

    } catch (error) {
      await transaction.rollback()
      throw error
    }
  }

  async getTag(id) {
    let tags = await models.Tags.findByPk(id)
    if (!tags) throw new CustomError('Not found Tags', 404, 'Not Found')
    return tags
  }
}

module.exports = TagsService