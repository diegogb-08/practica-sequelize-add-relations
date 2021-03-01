'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Humans', [
      {
        name: 'Mario',
        genre: 'H',
        age: 12
      },
      {
        name: 'Lucia',
        genre: 'M',
        age: 16
      }
      
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
