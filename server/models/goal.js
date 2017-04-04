'use strict';
module.exports = function(sequelize, DataTypes) {
  var Goal = sequelize.define('Goal', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
    },
    due_date: {
      type: DataTypes.DATE
    },
    isAchieved: {
      type: DataTypes.STRING,
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Goal;
};
