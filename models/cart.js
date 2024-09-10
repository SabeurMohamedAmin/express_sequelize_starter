const sequelize = require("../utils/database");
const DataTypes = require("sequelize");

const Cart = sequelize.define("cart", {
  id: {
    type: DataTypes.INTEGER,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  isCheckout: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = Cart;
