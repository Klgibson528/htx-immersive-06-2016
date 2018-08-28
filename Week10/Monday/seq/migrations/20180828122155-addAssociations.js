'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'users',
      'studentId',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        },
        allowNull: true
      }
    );
  },
  down: (queryInterface, Sequelize) => {
    // return queryInterface.removeColumn(
    //           'Users', 'nickname');
  }
};