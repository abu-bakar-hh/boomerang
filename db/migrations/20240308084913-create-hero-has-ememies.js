'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('HeroHasEmemies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      hero_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Heros',
          key: 'id',
        },
      },
      enemy_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Enemies',
          key: 'id',
        },
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('HeroHasEmemies');
  }
};