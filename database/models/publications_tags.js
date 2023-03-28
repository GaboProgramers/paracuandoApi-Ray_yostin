'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class publications_tags extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
publications_tags.belongsTo(models.Tags, {as: 'tag', foreignKey: 'tag_id'})
      publications_tags.belongsTo(models.Publications, {as: 'publication', foreignKey: 'publication_id'})
    }
  }
  publications_tags.init({
    publication_id: {
      type: DataTypes.UUIDV4,
      primaryKey:true                 
    },
    tag_id: {
      type: DataTypes.INTEGER,
      primaryKey:true                 
    }
  }, {
    sequelize,
    modelName: 'Publications_tags',
    tableName: 'publications_tags',
    underscored: true,
    timestamps: true,
    scopes: {
      view_public: {
        attributes: ['publication_id','tag_id','created_at', 'updated_at']
      },
      no_timestamps: {
        attributes: { exclude: ['created_at', 'updated_at'] }
      },
    },
  });
  return publications_tags;
};
