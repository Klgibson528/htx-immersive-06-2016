'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});

  //adds several userId to student table

  user.associate = function(models) {
    user.belongsTo(models.student);
  }; 
  return user;
};