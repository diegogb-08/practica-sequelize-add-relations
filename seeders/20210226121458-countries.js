'use strict';


const { format } = require("sequelize/types/lib/utils")

const countries = require('countries.json')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Countries', [{

    }], 
    {});
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
