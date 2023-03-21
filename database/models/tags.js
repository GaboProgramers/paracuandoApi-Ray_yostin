'use stric'

const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class Tags extends Model {
        static associate(models) {
            // Tags.hasMany(models.PublicationsTags, { as: 'publicationsTags', foreignKey: 'tags_id' })
            // Tags.hasMany(models.Publications, { as: 'publications', foreignKey: 'publications_id' })
        }
    }

    Tags.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        image_url: {
            type: DataTypes.STRING,
            allowNull: false
        },
        created_at: {
            allowNull: false,
            type: DataTypes.DATE,
        },
        updated_at: {
            allowNull: false,
            type: DataTypes.DATE,
        }
    },
        {
            sequelize,
            modelName: 'Tags',
            tableName: 'tags',
            underscored: true,
            timestamps: true
        })
    return Tags
}