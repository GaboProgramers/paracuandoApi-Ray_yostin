'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Publications extends Model {
    static associate(models) {
      Publications.belongsTo(models.Users, { as: 'user', foreignKey: 'user_id' })
      // Publications.belongsTo(models.Publicationtypes, { as: 'publicationTypes', foreignKey: 'publication_type_id' })
      // Publications.belongsTo(models.Cities, { as: 'cities', foreignKey: 'city_id' })
      // Publications.hasMany(models.Publicationimages, {as: 'publicationimages', foreignKey: 'publication_id' })
      // Publications.belongsToMany(models.Users, {as: 'user', foreignKey: 'user_id'})
      // falta mas belongstomany
    }
  }
  Publications.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    user_id:{
      type:DataTypes.UUID
    } ,
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