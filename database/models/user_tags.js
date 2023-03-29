'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users_tags extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      users_tags.belongsTo(models.Tags, {as: 'tag', foreignKey: 'tag_id'})
      users_tags.belongsTo(models.Users, {as: 'user', foreignKey: 'user_id'})
    }
  }
  users_tags.init({
    user_id: {
      type: DataTypes.UUIDV4,
      primaryKey:true                 
    },
    tag_id: {
      type: DataTypes.INTEGER,
      primaryKey:true                 
    }
  }, {
    sequelize,
    modelName: 'Users_tags',
    tableName: 'users_tags',
    underscored: true,
    timestamps: true,
    scopes: {
      view_public: {
        attributes: ['user_id','tag_id','created_at', 'updated_at']
      },
      no_timestamps: {
        attributes: { exclude: ['created_at', 'updated_at'] }
      },
    },
  });
  return users_tags;
};
