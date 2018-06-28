'use strict';
module.exports = (sequelize, DataTypes) => {
  var attendees = sequelize.define('attendees', {
    attendeeId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      //allowNull: false,
      primaryKey: true
    },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    jobTitle: DataTypes.STRING,
    companyFunction: DataTypes.STRING,
    company: DataTypes.STRING,
    address: DataTypes.STRING,
    address2: DataTypes.STRING,
    city: DataTypes.STRING,
    zip: DataTypes.INTEGER,
    phone: DataTypes.STRING,
    fax: DataTypes.STRING,
    email: DataTypes.STRING,
    website: DataTypes.STRING
  }, {
      freezeTableName: true
  });
  attendees.associate = function(models) {
    attendees.hasMany(models.classes, {
      foreignKey: 'classId'
    });
  };
  return attendees;
};