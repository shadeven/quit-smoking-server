'use strict';
module.exports = function(sequelize, DataTypes) {
  var Action = sequelize.define('Action', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        Action.belongsTo(models.Goal, {
          foreignKey: 'goalId'
        });
      }
    }
  });
  return Action;
};