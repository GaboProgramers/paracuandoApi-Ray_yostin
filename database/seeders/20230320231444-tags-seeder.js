'use strict';
const uuid = require('uuid')
const { Op } = require('sequelize')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = queryInterface.sequelize.transaction()

    const tagsSeeds = [
      {
        id: uuid.v4(),
        name: 'TEST',
        description: 'TAGS TEST',
        created_at: new Date(),
        updated_at: new Date()
      }
    ]

    try {
      await queryInterface.bulkInsert('tags', tagsSeeds, { transaction })

      await transaction.commit()

    } catch (error) {
      await transaction.rollback()
      throw error
    }
  },

  async down(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction()

    const tasgDescription = [
      'Mega Description'
    ]

    try {
      await queryInterface.bulkDelete(
        'tags',
        {
          description: {
            [Op.or]: tasgDescription
          }
        },
        { transaction }
      )
    } catch (error) {
      await transaction.rollback()
      throw error
    }
  }
};
