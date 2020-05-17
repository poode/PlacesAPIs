'use strict';
module.exports = (sequelize, DataTypes) => {
  const Vote = sequelize.define('vote', {
    pollId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'polls',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'users',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    }
  }, {});
  Vote.associate = function(models) {
    // associations can be defined here
    Vote.belongsTo(models.user);
    Vote.belongsTo(models.poll);
  };
  return Vote;
};