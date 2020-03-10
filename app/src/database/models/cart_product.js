'use strict';
module.exports = (sequelize, DataTypes) => {
  const cart_product = sequelize.define('cart_product', {
    quantity: DataTypes.INTEGER
  }, {});
  cart_product.associate = function(models) {
    // associations can be defined here
  };
  return cart_product;
};