'use strict';
module.exports = (sequelize, DataTypes) => {
  const cart = sequelize.define('cart', {
    isActive: DataTypes.BOOLEAN
  }, {});
  cart.associate = function(models) {
    // associations can be defined here
  };
  return cart;
};