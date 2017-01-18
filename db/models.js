'use strict';

const Sequelize = require('sequelize');
const pg = require('pg');
// const DATABASE_URI = require(path.join(__dirname, '../env')).DATABASE_URI;


//  const db = new Sequelize(
//   'postgres://localhost:5432/analogies', {
//     logging: false
//   }
// );

// console.log('process', process.env.DATABASE_URL);

const db = process.env.DATABASE_URL or LOCAL_DB
client = new pg.Client db
client.connect()

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