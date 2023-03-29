'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Publications extends Model {
    static associate(models) {
      Publications.belongsTo(models.Users, { as: 'user', foreignKey: 'user_id' })
      Publications.belongsTo(models.Publicationtypes, { as: 'publicationTypes', foreignKey: 'publication_type_id' })
      Publications.belongsTo(models.Cities, { as: 'cities', foreignKey: 'city_id' })
      // Publications.hasMany(models.Publicationimages, {as: 'publicationimages', foreignKey: 'publication_id' })
      // Publications.belongsToMany(models.Users, { as: 'user', foreignKey: 'id' })
      // falta mas belongstomany
    }
  }
  Publications.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    publication_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    city_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    context: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    reference_link: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Publications',
    tableName: 'publications',
    underscored: true,
    timestamps: true,
  });
  return Publications;
};