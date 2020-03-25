'use strict';
module.exports = (sequelize, DataTypes) => {
  const City = sequelize.define('city', {
    name: {
      type: DataTypes.STRING(255),
      unique: true,
      allowNull: false,
    }
  }, {
    indexes:[
      {
        unique: true,
        fields:['name']
      }
     ]
  });
  City.associate = function(models) {
    // associations can be defined here
    // City.hasMany(models.Place);
  };
  return City;
};