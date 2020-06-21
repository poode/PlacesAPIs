'use strict';
module.exports = (sequelize, DataTypes) => {
  const Poll = sequelize.define('poll', {
    albumId: { 
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'albums',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
    text: {
      type: DataTypes.STRING(1000),
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
  }, {});
  Poll.associate = function(models) {
    // console.log(models);
    // associations can be defined here
    Poll.belongsTo(models.album);
    Poll.hasMany(models.vote, {onDelete: 'CASCADE'});
    Poll.belongsTo(models.user);
  };
  return Poll;
};
