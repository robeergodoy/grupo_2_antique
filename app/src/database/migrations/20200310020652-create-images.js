'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('images', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      image_1: {
        type: Sequelize.STRING
      },
      image_2: {
        type: Sequelize.STRING
      },
      image_3: {
        type: Sequelize.STRING
      },
      productId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {        // user tiene relacion 1:1 con vendedor
          model: 'products',
          key: 'id',
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('images');
  }
};