'use strict';
const { Op } = require('sequelize');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.bulkInsert(
        'cities',
        [
          {
            id: '1',
            state_id: '1',
            name: 'Tamangadapio',
            created_at: new Date(),
            updated_at: new Date(),
          },
          {
            id: '2',
            state_id: '1',
            name: 'Pucallpa',
            created_at: new Date(),
            updated_at: new Date(),
          },
          {
            id: '3',
            state_id: '1',
            name: 'Arequipa',
            created_at: new Date(),
            updated_at: new Date(),
          },
        ],
        { transaction }
      );
      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  },

  async down(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.bulkDelete('cities', {
        name: {
          [Op.in]: [
            'Tamangadapio',
            'Pucallpa',
            'Arequipa',
          ],
        },
      });
      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  },
};