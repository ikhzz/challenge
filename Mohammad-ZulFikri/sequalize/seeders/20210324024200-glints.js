'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /*
      Add seed commands here.
     
      Example:
    */
      await queryInterface.bulkInsert('Glints', [{
        name: 'Ikhda Wildani',
        position: 'Industrial Trainer',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'Fahmi Alfareza',
        position: 'Facilitator',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('Glints', null, {});
  }
};
