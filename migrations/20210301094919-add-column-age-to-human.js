'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addColumn('Humans','age',{
        allowNull: false,
        type: Sequelize.INTEGER,
        defaultValue:0
    })
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn('Humans', 'age')
  }
};
