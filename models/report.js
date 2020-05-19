'use strict';
module.exports = (sequelize, DataTypes) => {
  const Report = sequelize.define('report', {
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
    issue: {
      type: DataTypes.STRING(1000),
      allowNull: false,
    },
  }, {});
  Report.associate = function(models) {
    // associations can be defined here
    Report.belongsTo(models.user);
    Report.belongsTo(models.album);
  };
  return Report;
};
