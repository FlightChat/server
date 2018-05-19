'use strict';
module.exports = (sequelize, DataTypes) => {
  var FlightDate = sequelize.define('FlightDate', {
    flight_id: DataTypes.INTEGER
  }, {});
  FlightDate.associate = function(models) {
    // associations can be defined here
  };
  return FlightDate;
};