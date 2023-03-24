'use strict';
const { Op } = require('sequelize');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.bulkInsert(
        'tags',
        [
          {
            description: 'Ropa y Accesorios',
            name: 'Ropa y Accesorios',
            imagen_url: 'imagen.jpg',
            created_at: new Date(),
            updated_at: new Date(),
          },
          {
            description: 'Deportes',
            name: 'Deportes',
            imagen_url: 'imagen.jpg',
            created_at: new Date(),
            updated_at: new Date(),
          },
          {
            description: 'Conciertos',
            name: 'Conciertos',
            imagen_url: 'imagen.jpg',
            created_at: new Date(),
            updated_at: new Date(),
          },
          {
            description: 'Meet and Greet',
            name: 'Meet and Greet',
            imagen_url: 'imagen.jpg',
            created_at: new Date(),
            updated_at: new Date(),
          },
          {
            description: 'E-sport',
            name: 'E-sport',
            imagen_url: 'imagen.jpg',
            created_at: new Date(),
            updated_at: new Date(),
          },
          {
            description: 'Pop/Rock',
            name: 'Pop/Rock',
            imagen_url: 'imagen.jpg',
            created_at: new Date(),
            updated_at: new Date(),
          },
          {
            description: 'Tecnologia',
            name: 'Tecnologia',
            imagen_url: 'imagen.jpg',
            created_at: new Date(),
            updated_at: new Date(),
          },
          {
            description: 'Hogar y Decoracion',
            name: 'Hogar y Decoracion',
            imagen_url: 'imagen.jpg',
            created_at: new Date(),
            updated_at: new Date(),
          },
          {
            description: 'Abastecimiento',
            name: 'Abastecimiento',
            imagen_url: 'imagen.jpg',
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
      await queryInterface.bulkDelete('tags', {
        name: {
          [Op.in]: [
            'Ropa y Accesorios',
            'Deportes',
            'Conciertos',
            'Meet and Greet',
            'E-sport',
            'Pop/Rock',
            'Tecnologia',
            'Hogar y Decoracion',
            'Abastecimiento',

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
