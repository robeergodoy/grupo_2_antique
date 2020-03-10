'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    email: DataTypes.STRING,  
    password: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    sellerId: DataTypes.INTEGER
  }, {});
  user.associate = function(models) {
    user.belongsTo(models.seller, {foreignKey: 'sellerId', as: 'seller'})
  };
  return user;
};