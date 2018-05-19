'use strict';
module.exports = (sequelize, DataTypes) => {
  var City = sequelize.define('City', {
    name: DataTypes.STRING,
    country_id: DataTypes.INTEGER
  }, {});
  City.associate = function(models) {
    // associations can be defined here
  };
  return City;
};