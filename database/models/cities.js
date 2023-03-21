'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cities extends Model {
    static associate(models) {
      Cities.belongsTo(models.States, { as: 'states', foreignKey: 'cities_id' })
      /* Cities.hasMany(models.Publications, { as: 'publications', foreignKey: 'cities_id' }) */
    }
  }
  Cities.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
      },
      state_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      name: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Cities',
      tableName: 'cities',
      underscored: true,
      timestamps: true
    });
  return Cities;
};