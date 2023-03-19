// 'use strict';
// const { Op } = require('sequelize')
// const { v4: uuid4 } = require('uuid')

// /** @type {import('sequelize-cli').Migration} */
// module.exports = {
//   async up(queryInterface, Sequelize) {
//     const transaction = queryInterface.sequelize.transaction()

//     try {
//       await queryInterface.bulkInsert('states', [
//         {
//           id: uuid4()
//         }
//       ], { transaction })


//     } catch (error) {
//       await transaction.rollback()
//       throw error
//     }
//   },

//   async down(queryInterface, Sequelize) {
//     /**
//      * Add commands to revert seed here.
//      *
//      * Example:
//      * await queryInterface.bulkDelete('People', null, {});
//      */
//   }
// };
