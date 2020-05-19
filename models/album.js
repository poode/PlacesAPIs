'use strict';
module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define('album', {
    name: { 
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
     },
    cityId: { 
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'cities',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
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
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
     },
  }, {
    indexes:[
      {
        unique: true,
        fields:['name']
      }
     ]
  });
  Album.associate = function(models) {
    // associations can be defined here
    Album.belongsTo(models.user);
    Album.belongsTo(models.city);
    Album.hasMany(models.poll);
    Album.hasMany(models.albumImage);
  };
  return Album;
};