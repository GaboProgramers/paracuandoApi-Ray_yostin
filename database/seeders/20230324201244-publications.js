'use strict';
const { Op } = require('sequelize');
const uuid = require('uuid')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.bulkInsert(
        'publications',
        [
          {
            id: '1',
            user_id:'7d9c0523-3dcf-4729-a662-ca860e5347ed',
            publication_type_id: 1,
            city_id:1,
            title: 'titulo1',
            description: 'descripcion1',
            context: 'contexto1',
            reference_link: 'referencia1',
            created_at: new Date(),
            updated_at: new Date(),
          },
          {
            id: '2',
            user_id:'7d9c0523-3dcf-4729-a662-ca860e5347ed',
            publication_type_id: 1,
            city_id:1,
            title: 'titulo2',
            description: 'descripcion2',
            context: 'contexto2',
            reference_link: 'referencia2',
            created_at: new Date(),
            updated_at: new Date(),
          },
          {
            id: '3',
            user_id: '5cd88a34-1781-4a97-a264-3c36326cb3e5',
            publication_type_id: 1,
            city_id:1,
            title: 'titulo3',
            description: 'descripcion3',
            context: 'contexto3',
            reference_link: 'referencia3',
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
  //! Error user_id no se como hacer para que el user_id sea exportado desde Users deberiamos obtener los datos de user.id pero no deja a pesar de que ponga que es tipo uuid, integer o string, con uuid tampoco deja es raro
  async down (queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.bulkDelete('publications', {
        title: {
          [Op.in]: [
            'titulo1',
            'titulo2',
            'titulo3',
          ],
        },
      });
      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  }
};
