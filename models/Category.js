const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

// CREATES Category Model
// Parent: Model; Child: Category
class Category extends Model {}

// A better version of `schema.sql`
// CREATES fields/columns FOR Cateogry model
Category.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      // Will give an id of 1, 2, 3... and so on AUTOMATICALLY
      autoIncrement: true
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    // Passes the connection instance
    sequelize,
    // Generated model will OMIT the createdAt and updatedAt attributes (these attributes store a timestamp of WHEN a row was inserted as well as when it was last updated)
    timestamps: false,
    // Allows Sequelize to auto pluralize the model name
    freezeTableName: true,
    // Will put an underscore inbetween two words (ex. `camelCase` becomes `camel_case`)
    underscored: true,
    // Choose the model name
    modelName: 'category',
  }
);

module.exports = Category;

// ^ DONE ^