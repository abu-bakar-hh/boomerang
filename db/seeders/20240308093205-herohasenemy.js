/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('HeroHasEmemies', [
      {
        hero_id: 1,
        enemy_id: 1,
      }, {
        hero_id: 1,
        enemy_id: 2,
      }, {
        hero_id: 1,
        enemy_id: 3,
      }, {
        hero_id: 2,
        enemy_id: 1,
      }, {
        hero_id: 2,
        enemy_id: 2,
      }, {
        hero_id: 2,
        enemy_id: 3,
      }, {
        hero_id: 3,
        enemy_id: 1,
      }, {
        hero_id: 3,
        enemy_id: 2,
      }, {
        hero_id: 3,
        enemy_id: 3,
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
    await queryInterface.bulkDelete('HeroHasEnemies', null, {});
  },
};
