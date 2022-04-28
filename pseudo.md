# ORM-13 INSTRUCTIONS

1. Open and read README.md
2. Run `npm i`
3. Add username & password to `.env` file
4. Run `SOURCE schema.sql;` in the `./db/` folder
    * Run `USE ecommerce_db;`
5. Follow instructions for `server.js`
    * Import sequelize via `./config/connection` to complete connection
6. Follow instructions for `./models/Category.js` and `./seeds/category-seeds.js` and `./routes/api/category-routes.js`
7. Follow instructions for `./models/Product.js` and `./seeds/product-seeds.js` and `./routes/api/product-routes.js`