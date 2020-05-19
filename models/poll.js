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
  }, {});
  Poll.associate = function(models) {
    // console.log(models);
    // associations can be defined here
    Poll.belongsTo(models.album);
    Poll.hasMany(models.vote, {onDelete: 'CASCADE'});
  };
  return Poll;
};