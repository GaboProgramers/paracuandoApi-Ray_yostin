'use stric'

const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class States extends Model {
        static associate(models) {
            States.belongsTo(models.States, { as: 'countries' })
        }
    }

    States.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        country_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            foreignKey: true,
            references: {
                model: 'countries',
                key: 'id'
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
        },
        cities_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            foreignKey: true,
            references: {
                model: 'cities',
                key: 'id'
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
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
            modelName: 'States',
            tableName: 'states',
            underscored: true,
            timestamps: true
        })
    return States
}