'use strict';
const { Op } = require('sequelize')
const uuid = require('uuid')


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = queryInterface.sequelize.transaction()

    const statesSeeds = [
      {
        id: uuid.v4(),
        name: 'TEST',
        description: 'SUPER TEST',
        created_at: new Date(),
        updated_at: new Date()
      }
    ]

    try {
      await queryInterface.bulkInsert('states', statesSeeds, { transaction })

      await transaction.commit()

    } catch (error) {

      await transaction.rollback()
      throw error
    }
  },

  async down(queryInterface, /*Sequelize*/) {
    const transaction = await queryInterface.sequelize.transaction()
    try {
      await queryInterface.bulkDelete('states', {
        name: {
          [Op.or]: ['medellin']
        }
      }, { transaction })
      await transaction.commit()
    } catch (error) {
      await transaction.rollback()
      throw error
    }
  }
};
