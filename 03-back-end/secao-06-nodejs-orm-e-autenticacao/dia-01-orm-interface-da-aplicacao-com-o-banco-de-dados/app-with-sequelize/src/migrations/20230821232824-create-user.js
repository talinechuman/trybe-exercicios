'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('Users', {
        id: {
          allowNull: false,
          // allowNull: Define se o campo pode ou não receber um valor null;

          autoIncrement: true,
          // autoIncrement: Define se o campo vai ter incremento automático;

          primaryKey: true,
          // primaryKey: Define se o campo é uma chave primária;

          type: Sequelize.INTEGER
          // type: Define o tipo do campo, por exemplo STRING, INTEGER, DATE, etc.

        },
        fullName: {
          type: Sequelize.STRING
        },
        email: {
          type: Sequelize.STRING
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

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');

    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
