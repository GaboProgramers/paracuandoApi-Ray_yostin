'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tags extends Model {
    static associate(models) {
      // define association here
    }
  }
  Tags.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      },
    },
    description: DataTypes.STRING,
    imagen_url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Tags',
    tableName: 'tags',
    underscored: true,
    timestamps: true
  });
  return Tags;
};