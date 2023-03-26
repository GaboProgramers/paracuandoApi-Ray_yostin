'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Publications extends Model {
    static associate(models) {
      Publications.belongsTo(models.Users, { as: 'user', foreignKey: 'id' })
      Publications.belongsTo(models.Publicationtypes, { as: 'publicationTypes', foreignKey: 'id' })
      Publications.belongsTo(models.Cities, { as: 'cities', foreignKey: 'id' })
      // Publications.hasMany(models.Publicationimages, {as: 'publicationimages', foreignKey: 'publication_id' })
      // Publications.belongsToMany(models.Users, { as: 'user', foreignKey: 'id' })
      // falta mas belongstomany
    }
  }
  Publications.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.UUID
    },
    publication_type_id: DataTypes.INTEGER,
    city_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    context: DataTypes.TEXT,
    reference_link: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Publications',
    tableName: 'publications',
    underscored: true,
    timestamps: true,
  });
  return Publications;
};