'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class States extends Model {
    static associate(models) {
      // define association here
      States.belongsTo(models.States, { as: 'countries' })
    }
  }
  States.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
  },
  country_id: {
      type: DataTypes.INTEGER,
  },
  name: {
      type: DataTypes.STRING,

  },
  }, {
    sequelize,
    modelName: 'States',
    tableName: 'states',
    underscored: true,
    timestamps: true
  });
  return States;
};