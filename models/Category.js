const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

// CREATES Category Model
// Parent: Model; Child: Category
class Category extends Model {}

// CREATES fields/columns FOR Cateogry model
Category.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
