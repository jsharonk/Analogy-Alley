'use strict';
const Sequelize = require('sequelize');
const db = new Sequelize(
  'postgres://localhost:5432/analogies', {
    logging: false
  }
);

const Analogy = db.define('analogy', {
  name: {
    type: Sequelize.STRING,
    allowNull: false 
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false
  }
});


module.exports = {
  Analogy 
}