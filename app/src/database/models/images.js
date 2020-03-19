'use strict';
module.exports = (sequelize, DataTypes) => {
  const images = sequelize.define('images', {
    image_1: DataTypes.STRING,
    image_2: DataTypes.STRING,
    image_3: DataTypes.STRING,
    productId: DataTypes.INTEGER
  }, {});
  images.associate = function(models) {
    images.belongsTo(models.product)
  };
  return images;
};