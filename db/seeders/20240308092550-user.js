'use strict';

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
    await queryInterface.bulkInsert('Users', [
      {
        name: 'Dima',
        scores: 0,
        hero_id: 1,
        bom_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        name: 'Valera',
        scores: 2,
        hero_id: 1,
        bom_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'AbuBakar',
        scores: 5000,
        hero_id: 3,
        bom_id: 3,
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
    await queryInterface.bulkDelete('Users', null, {});
  },
};
