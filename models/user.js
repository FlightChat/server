'use strict';
module.exports = (sequelize, DataTypes) => {
    var User = sequelize.define('Flight', {
        iduser: DataTypes.INTEGER,
        name: DataTypes.STRING,
        username: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.DATE
    }, {});
    User.associate = function(models) {
        // associations can be defined here
    };
    return Flight;
};