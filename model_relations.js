//
//THIS FILE IS NOT USED just a show case.
// This file contains the code to define the relationships between the models.
const Cart = require("./models/cart");
const User = require("./models/user");
const CartItem = require("./models/cart_item");
const Product = require("./models/product");
const Category = require("./models/category");

// In User.js
User.hasOne(Cart, {
  foreignKey: "userId",
  as: "cart",
});

// In Cart.js
Cart.belongsTo(User, {
  foreignKey: "userId",
});
Cart.hasMany(CartItem, {
  foreignKey: "cartId",
});
// In CartItem.js
CartItem.belongsTo(Cart, {
  foreignKey: "cartId",
});
CartItem.belongsTo(Product, {
  foreignKey: "productId",
});

// In Product.js
Product.hasMany(CartItem, {
  foreignKey: "productId",
});

Product.belongsTo(Category, {
  foreignKey: "categoryId",
});

// In Category.js
Category.hasMany(Product, {
  foreignKey: "categoryId",
});
