'use strict';
const faker = require('faker')
const articles = [...Array(50)].map(article => ({
  tittle : faker.lorem.words(),
  description : faker.lorem.paragraphs()
}))
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('articles', articles, {})
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('articles', null, {})
    
  }
};
