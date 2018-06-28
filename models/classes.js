'use strict';
module.exports = (sequelize, DataTypes) => {
  var classes = sequelize.define('classes', {
    classId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      //allowNull: false,
      primaryKey: true
    },
    dateFormed: DataTypes.INTEGER,
    title: DataTypes.STRING,
    day: DataTypes.STRING,
    time: DataTypes.STRING,
    classDescription: DataTypes.STRING,
    targetAudience: DataTypes.STRING,
    classSpeaker: DataTypes.STRING
  }, {
      freezeTableName: true
  });
  classes.associate = function(models) {
    // associations can be defined here
  };
  return classes;
};