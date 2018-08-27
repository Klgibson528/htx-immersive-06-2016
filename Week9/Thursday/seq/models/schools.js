'use strict';
module.exports = (sequelize, DataTypes) => {
  const schools = sequelize.define('schools', {
    school: DataTypes.STRING,
    typeOfSchool: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {});
  schools.associate = function(models) {
    // associations can be defined here
  };
  return schools;
};