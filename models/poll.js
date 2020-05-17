'use strict';
module.exports = (sequelize, DataTypes) => {
  const Poll = sequelize.define('poll', {
    placeId: { 
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'places',
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
    Poll.belongsTo(models.place);
    Poll.hasMany(models.vote);
  };
  return Poll;
};