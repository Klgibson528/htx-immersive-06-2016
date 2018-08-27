'use strict';
module.exports = (sequelize, DataTypes) => {
  const user3 = sequelize.define('user3', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  user3.associate = function(models) {
    // associations can be defined here
  };
  return user3;
};