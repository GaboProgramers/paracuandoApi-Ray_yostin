'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Publications_tags extends Model {
    static associate(models) {
      Publications_tags.belongsTo(models.Tags, { as: 'tag', foreignKey: 'tag_id' })
      Publications_tags.belongsTo(models.Publications, { as: 'publication', foreignKey: 'publication_id' })
    }
  }
  Publications_tags.init({
    publication_id: {
      type: DataTypes.UUIDV4,
      primaryKey: true
    },
    tag_id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    }
  }, {
    sequelize,
    modelName: 'Publications_tags',
    tableName: 'publications_tags',
    underscored: true,
    timestamps: true,
    scopes: {
      view_public: {
        attributes: ['publication_id', 'tag_id', 'created_at', 'updated_at']
      },
      no_timestamps: {
        attributes: { exclude: ['created_at', 'updated_at'] }
      },
    },
  });
  return Publications_tags;
};
