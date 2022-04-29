# ORM-13 INSTRUCTIONS

<!-- DONE -->
1. Open and read README.md
<!-- DONE -->
2. Run `npm i`
<!-- DONE -->
3. Add username & password to `.env` file
<!-- DONE -->
4. Run `SOURCE schema.sql;` in the `./db/` folder
    * Run `USE ecommerce_db;`
<!-- DONE -->
5. Follow instructions for `server.js`
    * Import sequelize via `./config/connection` to complete connection
<!-- DONE -->
6. Follow instructions for the following `models` files:
    * `Category.js` 
    * `Product.js`
    * `Tag.js`
    * `ProductTag.js`
<!-- DONE -->
7. Follow instructions for `models/index.js`
    * Define tables to store foreign keys
    * Give them each an alias (for retrieving data)
<!-- DONE -->
8. Follow instructions for the following `/routes/api` files:
    * `category-routes.js`
    * `product-routes.js`
    * `tag-routes.js`
9. Follow the 'Seed the Database' instructions on `README.md`
10. Follow the 'Sync Sequelize to the Database on Server Start' instructions on `README.md`
    
 <!-- WHAT DOES `req.body` DO? FIGURE THIS OUT ON FRIDAY!!! -->


