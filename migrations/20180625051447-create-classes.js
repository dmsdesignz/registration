'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('classes', {
      classId: {
        //allowNull: false,
        type: Sequelize.INTEGER
      },
      dateFormed: {
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      day: {
        type: Sequelize.STRING
      },
      time: {
        type: Sequelize.STRING
      },
      classDescription: {
        type: Sequelize.STRING
      },
      targetAudience: {
        type: Sequelize.STRING
      },
      classSpeaker: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('classes');
  }
};