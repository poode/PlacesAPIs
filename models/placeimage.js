'use strict';
module.exports = (sequelize, DataTypes) => {
  const PlaceImage = sequelize.define('placeImage', {
    placeId: { 
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { 
       model: 'places',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    imageUrl: {
      type: DataTypes.STRING(1000),
      allowNull: false,
    },
  }, {});
  PlaceImage.associate = function(models) {
    // associations can be defined here
    PlaceImage.belongsTo(models.place);
  };
  return PlaceImage;
};