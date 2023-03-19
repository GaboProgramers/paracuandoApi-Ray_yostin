// 'use strict';
// const uuid = require('uuid')
// const { Op } = require('sequelize')

// /** @type {import('sequelize-cli').Migration} */
// module.exports = {
//   async up(queryInterface, Sequelize) {
//     const transaction = queryInterface.sequelize.transaction()

//     const publicationsTypeSeeds = [
//       {
//         id: uuid.v4(),
//         name: 'TEST',
//         description: 'SUPER TEST',
//         created_at: new Date(),
//         updated_at: new Date()
//       }
//     ]

//     try {
//       await queryInterface.bulkInsert('publicationsType', publicationsTypeSeeds, { transaction })

//       await transaction.commit()

//     } catch (error) {
//       await transaction.rollback()
//       throw error
//     }
//   },

//   async down(queryInterface, Sequelize) {
//     const transaction = await queryInterface.sequelize.transaction()

//     const publicationsDescription = [
//       'Mega Description'
//     ]

//     try {
//       await queryInterface.bulkDelete(
//         'publicationsType',
//         {
//           description: {
//             [Op.or]: publicationsDescription
//           }
//         },
//         { transaction }
//       )
//     } catch (error) {
//       await transaction.rollback()
//       throw error
//     }
//   }
// };
