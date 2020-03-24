'use strict';
module.exports = (sequelize, DataTypes) => {
  const PlaceImage = sequelize.define('placeImage', {
    placeId: { 
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'places',
        key: 'id',
      }
    },
    imageUrl: {
      type: DataTypes.STRING(500),
      allowNull: false,
    },
  }, {});
  PlaceImage.associate = function(models) {
    // associations can be defined here
    PlaceImage.belongsTo(models.place);
  };
  return PlaceImage;
};