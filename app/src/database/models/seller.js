'use strict';
module.exports = (sequelize, DataTypes) => {
  const seller = sequelize.define('seller', {
    name: DataTypes.STRING,
    bio: DataTypes.STRING,
    isActive: DataTypes.BOOLEAN
    }, {});
  seller.associate = function(models) {
    seller.hasMany(models.product, {as: 'products'})
    seller.hasOne(models.user, {foreignKey: 'sellerId', as: 'profile'})
  };
  return seller;
};