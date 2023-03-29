'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Votes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Votes.belongsTo(models.Users, {as: 'user', foreignKey: 'user_id'})
      Votes.belongsTo(models.Publications, {as: 'publication', foreignKey: 'publication_id'})
    }
  }
  Votes.init({
    publication_id: {
      type: DataTypes.UUIDV4,
      primaryKey:true                 
    },
    user_id: {
      type: DataTypes.UUIDV4,
      primaryKey:true                 
    }
  }, {
    sequelize,
    modelName: 'Votes',
    tableName: 'votes',
    underscored: true,
    timestamps: true,
    scopes: {
      view_public: {
        attributes: ['publication_id','user_id','created_at', 'updated_at']
      },
      no_timestamps: {
        attributes: { exclude: ['created_at', 'updated_at'] }
      },
    },
  })
  return Votes
}