"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class article extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  article.init(
    {
      tittle: {
        type: DataTypes.STRING,
        allowNull:false,
        validate:{
          notNull:{message: 'tittle required'}
        }
      },
      description: {
        type: DataTypes.STRING,
        allowNull:false,
        validate:{
          notNull:{message: 'description required'}
        }
      },
      status: DataTypes.BOOLEAN,
      views: DataTypes.INTEGER,
    },
    {
      freezeTableName: true,
      tableName: "articles",
      timestamps: true,
      sequelize
    }
  );
  return article;
};
