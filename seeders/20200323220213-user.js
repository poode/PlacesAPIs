'use strict';
const { hashPassword } = require('../app/services/strategies/util');
require('dotenv').config();

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('users', [{
        name: 'Administrator',
        email: 'admin@admin.com',
        role: 'admin',
        username: 'admin',
        password: await hashPassword(process.env.ADMIN_PASSWORD),
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkDelete('users', null, {});
  }
};
