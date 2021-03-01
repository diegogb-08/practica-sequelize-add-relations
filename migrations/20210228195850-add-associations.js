'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    return queryInterface.addColumn(
      'Movies', // name of Source model
      'ownerId', // name of the key we're adding 
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Humans', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    );
    
    /**
     * 
     * 
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  down: async (queryInterface, Sequelize) => {

    return queryInterface.removeColumn(
      'Movies', // name of Source model
      'ownerId' // key we want to remove
    );
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
