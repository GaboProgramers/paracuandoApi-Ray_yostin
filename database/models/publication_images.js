'use strict';
const {Model} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Publication_images extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Publication_images.belongsTo(models.Publications, {as: 'publication', foreignKey: 'publication_id'})
    }
  }
  Publication_images.init({
    publication_id: {
      type:DataTypes.UUID,
      primaryKey:true   
    },
    image_url: DataTypes.TEXT,
    order: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Publication_images',
    tableName: 'publication_images',
    underscored: true,
    timestamps: true,
    scopes: {
      view_public: {
        attributes: ['publication_id','image_url','order','created_at', 'updated_at']
      },
      no_timestamps: {
        attributes: { exclude: ['created_at', 'updated_at'] }
      },
    },
  });
  return Publication_images;
};