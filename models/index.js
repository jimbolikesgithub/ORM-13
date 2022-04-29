// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// CONNECTING TABLES TOGETHER (JOIN) (ESTABLISHES CONNECTIONS)

// `Product` (A) is the `source model`, and `Cateogry` (B) is the `target model`
// Products belongsTo Category
Product.belongsTo(Category, {
  // Defines association starting with Product
  // `category_id` references the `Category` `id`, and is listed in `Product.js`
  foreignKey: 'category_id',
})
// Categories have many Products
// MUST ESTABLISH THE BACKWARDS (DOES THE CATEGORY HAVE MANY PRODUCTS?)
Category.hasMany(Product, {
  foreignKey: 'category_id',
})

// Products belongToMany Tags (through ProductTag (model))
Product.belongsToMany(Tag, {
  // THIRD TABLE TO STORE FOREIGN KEYS
  through: {
    model: ProductTag,
    unique: false
  },
  // Define alias for retrieved data
  as: 'product_belongs_tag'
})

// Tags belongToMany Products (through ProductTag (model))
// MUST ESTABLISH THE BACKWARDS (DOES THE TAG BELONG TO MANY PRODUCTS?)
Tag.belongsToMany(Product, {
  // THIRD TABLE TO STORE FOREIGN KEYS
  through: {
    model:ProductTag,
    unique: false
  },
  // Define alias for retrieved data
  as: 'tag_belongs_product'
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};

// note: Notice how there's NO `product-tag.js` (was JOINED)

// ^ DONE ^