'use strict';
module.exports = (sequelize, DataTypes) => {
  var Flight = sequelize.define('Flight', {
    flight_code: DataTypes.INTEGER,
    departure_city: DataTypes.STRING,
    arrival_city: DataTypes.STRING,
    time: DataTypes.DATE
  }, {});
  Flight.associate = function(models) {
    // associations can be defined here
  };
  return Flight;
};