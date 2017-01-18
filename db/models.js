'use strict';

const Sequelize = require('sequelize');
const DATABASE_URI = require(path.join(__dirname, '../env')).DATABASE_URI;


 const db = new Sequelize(
  'postgres://localhost:5432/analogies', {
    logging: false
  }
);

// console.log('process', process.env.DATABASE_URL);


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