// 'use stric'

// const { Model } = require('sequelize')

// module.exports = (sequelize, DataTypes) => {
//     class PublicationsType extends Model {
//         static associate(models) {
//             // PublicationsType.hasMany(models.Publications, { as: 'publications', foreignKey: 'publicationsType_id' })
//         }
//     }

//     PublicationsType.init({
//         id: {
//             type: DataTypes.UUID,
//             primaryKey: true,
//             allowNull: false
//         },
//         name: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             validate: {
//                 notEmpty: true
//             }
//         },
//         description: {
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
//             modelName: 'PublicationsType',
//             tableName: 'publicationsType',
//             underscored: true,
//             timestamps: true,
//             scopes: {
//                 view_public: { attributes: ['id', 'name', 'description'] }
//             }
//         })
//     return PublicationsType
// }