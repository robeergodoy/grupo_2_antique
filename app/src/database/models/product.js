'use strict';
module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define('product', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    discount: DataTypes.INTEGER,
    isActive: DataTypes.BOOLEAN
  }, {});
  product.associate = function(models) {
    // associations can be defined here
  };
  return product;
};