'use strict';

const enemy = require('../models/enemy');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Heros', [
      {
        skin: '🙆‍♂️',
        name: 'Valera',
        hp: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        skin: '🤦‍♂️',
        name: 'Andrey',
        hp: 200,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        skin: '🧔',
        name: 'AbuBakar',
        hp: 1000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Heros', null, {});
  },
};
