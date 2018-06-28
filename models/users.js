'use strict';
module.exports = (sequelize, DataTypes) => {
    var users = sequelize.define('users', {
        UserId: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        FirstName: DataTypes.STRING,
        LastName: DataTypes.STRING,
        Email: DataTypes.STRING,
        Username: DataTypes.STRING,
        Password: DataTypes.STRING
    }, {});
    users.associate = function (models) {
        // associations can be defined here
    };
    return users;
};