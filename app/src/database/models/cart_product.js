'use strict';
module.exports = (sequelize, DataTypes) => {
  const cart_product = sequelize.define('cart_product', {
    quantity: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER
  }, {});
  cart_product.associate = function(models) {
    cart_product.belongsTo(models.user, {foreignKey: 'userId'})
    cart_product.belongsTo(models.product, {foreignKey: 'productId'})
  };
  return cart_product;
};