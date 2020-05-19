'use strict';
module.exports = (sequelize, DataTypes) => {
  const AlbumImage = sequelize.define('albumImage', {
    albumId: { 
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { 
       model: 'albums',
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
  AlbumImage.associate = function(models) {
    // associations can be defined here
    AlbumImage.belongsTo(models.album);
  };
  return AlbumImage;
};