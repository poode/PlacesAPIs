'use strict';
module.exports = (sequelize, DataTypes) => {
  const Vote = sequelize.define('vote', {
    pollId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'polls',
        key: 'id',
      }
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'users',
        key: 'id',
      }
    }
  }, {});
  Vote.associate = function(models) {
    // associations can be defined here
    Vote.belongsTo(models.user);
    Vote.belongsTo(models.poll);
  };
  return Vote;
};