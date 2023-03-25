'use strict'
const uuid = require('uuid')
const { Op } = require('sequelize')
const { hashPassword } = require('../../libs/bcrypt')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction()

    const usersSeeds = [
      {
        id: '5cd88a34-1781-4a97-a264-3c36326cb3e5',
        first_name: 'TEST',
        last_name: 'TEST LN',
        email: 'example@academlo.com',
        username: 'example@academlo.com',
        password: hashPassword('12345678910'),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: '7d9c0523-3dcf-4729-a662-ca860e5347ed',
        first_name: 'TEST1',
        last_name: 'TEST1 LN',
        email: 'example1@academlo.com',
        username: 'example1@academlo.com',
        password: hashPassword('12345678910'),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]

    try {
      await queryInterface.bulkInsert('users', usersSeeds, { transaction })

      await transaction.commit()
    } catch (error) {
      await transaction.rollback()
      throw error
    }
  },

  async down(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction()

    const userNames = [
      'example@academlo.com',
    ]

    try {
      await queryInterface.bulkDelete(
        'users',
        {
          username: {
            [Op.or]: userNames,
          },
        },
        { transaction }
      )

      await transaction.commit()
    } catch (error) {
      await transaction.rollback()
      throw error
    }
  },
}
