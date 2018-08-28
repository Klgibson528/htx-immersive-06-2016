'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      
      return queryInterface.addColumn()
      'user',
      'studentId',
      {
        type: Sequelize.Integer,
        reference: {
          model: 'users',
          key: 'id'
        },
        allowNull: true
      }
    
  },

  down: (queryInterface, Sequelize) => {
    
      
      return queryInterface.removeColumn('users', 'studentId' );
    
  }
};
