'use strict';
module.exports = (sequelize, DataTypes) => {
  const Place = sequelize.define('place', {
    name: { 
      type: DataTypes.STRING(255),
      allowNull: false,
     },
    cityId: { 
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'cities',
        key: 'id',
      }
     },
    location: { 
      type: DataTypes.JSON,
      allowNull: false,
     },
    userId: { 
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      }
     },
  }, {});
  Place.associate = function(models) {
    // associations can be defined here
    Place.belongsTo(models.user);
    Place.belongsTo(models.city);
  };
  return Place;
};