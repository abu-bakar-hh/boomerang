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
    await queryInterface.bulkInsert('Boms', [
      {
        skin: '🌷',
        damage: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        skin: '🌹',
        damage: 200,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        skin: '💐',
        damage: 300,
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
    await queryInterface.bulkDelete('Boms', null, {});
  },
};
