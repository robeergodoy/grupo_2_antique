'use strict';
module.exports = (sequelize, DataTypes) => {
  const cart = sequelize.define('cart', {
    isActive: DataTypes.BOOLEAN,
    userId: DataTypes.INTEGER
  }, {});
  cart.associate = function(models) {
    cart.belongsTo(models.user, {foreignKey: 'userId', as: 'user'})
    cart.belongsToMany(models.product, {through: 'cart_prodct', foreignKey: 'cartdId', as: 'products'})
  };
  return cart;
};