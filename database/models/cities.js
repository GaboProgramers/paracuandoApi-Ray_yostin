// 'use stric'

// const { Model } = require('sequelize')

// module.exports = (sequelize, DataTypes) => {
//     class Cities extends Model {
//         static associate(models) {
//             /*  Cities.belongsTo(models.States, { as: 'states', foreignKey: 'cities_id' })
//              Cities.hasMany(models.Publications, { as: 'publications', foreignKey: 'publicationsType_id' }) */
//         }
//     }

//     Cities.init({
//         id: {
//             type: DataTypes.UUID,
//             primaryKey: true,
//             allowNull: false
//         },
//         state_id: {
//             type: DataTypes.INTEGER,
//             allowNull: false,
//             foreignKey: true,
//             references: {
//                 model: 'states',
//                 key: 'id'
//             },
//             onUpdate: 'CASCADE',
//             onDelete: 'CASCADE'
//         },
//         name: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             validate: {
//                 notEmpty: true
//             }
//         },
//         created_at: {
//             allowNull: false,
//             type: DataTypes.DATE,
//         },
//         updated_at: {
//             allowNull: false,
//             type: DataTypes.DATE,
//         }
//     },
//         {
//             sequelize,
//             modelName: 'Cities',
//             tableName: 'cities',
//             underscored: true,
//             timestamps: true
//         })
//     return Cities
// }