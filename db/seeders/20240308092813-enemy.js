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
    await queryInterface.bulkInsert('Enemies', [
      {
        skin: '👱‍♀️',
        hp: 100,
        damage: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        skin: '👸',
        hp: 200,
        damage: 35,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        skin: '🤼‍♀️',
        hp: 250,
        damage: 50,
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
    await queryInterface.bulkDelete('Enemies', null, {});
  },
};
