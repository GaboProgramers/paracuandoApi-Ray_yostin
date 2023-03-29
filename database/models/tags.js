'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tags extends Model {
    static associate(models) {
      Tags.hasMany(models.Publications_tags, {
        as: 'publications_tags', foreignKey: 'tag_id'
      })
      Tags.hasMany(models.Users_tags, {
        as: 'users_tags', foreignKey: 'user_id'
      })
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