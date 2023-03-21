'use strict';
const { Op } = require('sequelize');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.bulkInsert(
        'publicationtypes',
        [
          {
            id: '1',
            description: 'Marcas y Tiendas',
            name: 'Marcas y Tiendas',
            created_at: new Date(),
            updated_at: new Date(),
          },
          {
            id: '2',
            description: 'Artistas y Conciertos',
            name: 'Artistas y Conciertos',
            created_at: new Date(),
            updated_at: new Date(),
          },
          {
            id: '3',
            description: 'Torneos',
            name: 'Torneos',
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
      await queryInterface.bulkDelete('publicationtypes', {
        name: {
          [Op.in]: [
            'Marcas y Tiendas',
            'Artistas y Conciertos',
            'Torneos',
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
