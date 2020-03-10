'use strict';
module.exports = (sequelize, DataTypes) => {
  const seller = sequelize.define('seller', {
    name: DataTypes.STRING,
    bio: DataTypes.STRING,
    isActive: DataTypes.BOOLEAN
  }, {});
  seller.associate = function(models) {
    // associations can be defined here
  };
  return seller;
};