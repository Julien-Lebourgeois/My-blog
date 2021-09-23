'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MotCle extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      MotCle.belongsTo(models.Article, {
        foreignKey: 'articleId',
        onDelete: 'CASCADE'
      })
    }
  };
  MotCle.init({
    motCle: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'MotCle',
  });
  return MotCle;
};