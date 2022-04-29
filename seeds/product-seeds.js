const { Product } = require('../models');

const productData = [
  {
    // Passes a str value
    product_name: 'Plain T-Shirt',
    // Passes a decimal value and validates the number has a decimal
    price: 14.99,
    // Passes an int value and validates the number is a numeric
    stock: 14,
    // Passes an int value and REFERENCES the id
    category_id: 1,
  },
  {
    product_name: 'Running Sneakers',
    price: 90.0,
    stock: 25,
    category_id: 5,
  },
  {
    product_name: 'Branded Baseball Hat',
    price: 22.99,
    stock: 12,
    category_id: 4,
  },
  {
    product_name: 'Top 40 Music Compilation Vinyl Record',
    price: 12.99,
    stock: 50,
    category_id: 3,
  },
  {
    product_name: 'Cargo Shorts',
    price: 29.99,
    stock: 22,
    category_id: 2,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;

// ^ DONE ^
