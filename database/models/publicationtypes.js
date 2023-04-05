'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Publicationtypes extends Model {
    static associate(models) {
      Publicationtypes.hasMany(models.Publications, { as: 'publications', foreignKey: 'publication_type_id' })
    }
  }
  Publicationtypes.init({
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
      },
    },
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Publication_types',
    tableName: 'publication_types',
    underscored: true,
    timestamps: true
  });
  return Publicationtypes;
};