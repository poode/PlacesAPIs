'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('user', {
    email: {
      type: DataTypes.STRING(255),
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(500),
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM('admin', 'user'),
      allowNull: false,
      defaultValue: 'user'
    },
    name: {
      type: DataTypes.STRING(255),
    },
    username: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
    },
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    // User.hasMany(models.Place);
    // User.hasMany(models.Vote);
  };
  return User;
};
