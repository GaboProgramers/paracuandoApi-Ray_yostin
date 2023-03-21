'use strict';
const { Op } = require('sequelize');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.bulkInsert(
        'states',
        [
          {
            id: '1',
            country_id: '1',
            name: 'Aguascalientes',
            created_at: new Date(),
            updated_at: new Date(),
          },
          {
            id: '2',
            country_id: '1',
            name: 'Jalisco',
            created_at: new Date(),
            updated_at: new Date(),
          },
          {
            id: '3',
            country_id: '1',
            name: 'Baja California',
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
      await queryInterface.bulkDelete('states', {
        name: {
          [Op.in]: [
            'Aguascalientes',
            'Jalisco',
            'Baja California',
            'Bogotá',
            'Antioquia',
            'Valle del Cauca',
            'Lima',
            'Cusco',
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