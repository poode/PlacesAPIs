'use strict';
const { hashPassword } = require('../app/services/oauth/util');

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
        username: 'websiteAdmin',
        role: 'admin',
        password: await hashPassword('vipSecretpassowrd'),
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
