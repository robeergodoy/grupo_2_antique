'use strict';
module.exports = (sequelize, DataTypes) => {
  const images = sequelize.define('images', {
    image_1: DataTypes.STRING,
    image_2: DataTypes.STRING,
    image_3: DataTypes.STRING
  }, {});
  images.associate = function(models) {
    // associations can be defined here
  };
  return images;
};