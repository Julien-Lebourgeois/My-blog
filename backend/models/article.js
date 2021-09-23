'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Article extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Article.hasMany(models.Categorie, {
        foreignKey: 'articleId'
      }),
      Article.hasMany(models.MotCle, {
        foreignKey: 'articleId'
      })
    }
  };
  Article.init({
    titre: DataTypes.STRING,
    contenu: DataTypes.STRING,
    auteur: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Article',
  });
  return Article;
};