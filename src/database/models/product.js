'use strict';
module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define('product', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    discount: DataTypes.INTEGER,
    isActive: DataTypes.BOOLEAN,
    sellerId: DataTypes.INTEGER
  }, {});
  product.associate = function(models) {
    product.belongsToMany(models.cart, {through: 'cart_product', foreignKey: 'productId', as: 'carts'})
    product.hasOne(models.images, {foreingKey: 'productId'})
    product.belongsTo(models.seller)
  };
  return product;
}; 