const express = require("express");
const path = require("path");
const dotenv = require("dotenv").config({
  path: path.resolve(__dirname, "config.env"),
});

// Import models before using them in relationships
//you extrat the relationship from the models and
//put them in a separate file
const User = require("./models/user");
const Product = require("./models/product");
const Category = require("./models/category");
const Cart = require("./models/cart");
const CartItem = require("./models/cart_item");

// Establish relationships using Sequelize associations
(async () => {
  try {
    // Synchronize database models (use with caution)
    await sequelize.sync({ force: true });

    // User-Cart: One-to-One relationship
    User.hasOne(Cart, { foreignKey: "userId", as: "cart" });

    // Cart-CartItem: One-to-Many relationship
    Cart.hasMany(CartItem, { foreignKey: "cartId" });

    // CartItem-Product: One-to-One relationship
    CartItem.belongsTo(Product, { foreignKey: "productId" });

    // Product-Category: One-to-Many relationship
    Product.belongsTo(Category, { foreignKey: "categoryId" });

    // Category-Product (implicit): Many-to-Many relationship
    // Established through Product.belongsTo(Category)

    console.log("Database models sync & relationships established.");
  } catch (error) {
    console.error(
      "Error synchronizing models or defining relationships:",
      error
    );
  }
})();

// Enable parsing of JSON request bodies
const app = express().use(express.json());

// Define routes or API endpoints here (placeholder for now)
app.get("/", (req, res) => {
  res.send("Hello World!");
});

const port = process.env.PORT || 3000;
const host = process.env.HOST || "localhost";

app.listen(port, host, () => {
  console.log(`Server is running on port ${host}:${port}`);
});
