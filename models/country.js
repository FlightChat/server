'use strict';
module.exports = (sequelize, DataTypes) => {
  var Country = sequelize.define('Country', {
    name: DataTypes.STRING
  }, {});
  Country.associate = function(models) {
    // associations can be defined here
  };
  return Country;
};