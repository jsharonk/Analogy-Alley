'use strict';

const Sequelize = require('sequelize');
const pg = require('pg');
// const DATABASE_URI = require(path.join(__dirname, '../env')).DATABASE_URI;

if (process.env.postgresql-cubic-42207) {
  // the application is executed on Heroku ... use the postgres database
  sequelize = new Sequelize(process.env.postgresql-cubic-42207, {
    dialect:  'postgres',
    protocol: 'postgres',
    logging:  true //false
  });
} else {
  // the application is executed on the local machine
  // sequelize = new Sequelize("postgres:///my_db");

 const db = new Sequelize(
  'postgres://localhost:5432/analogies', {
    logging: false
  }
);
}

//  const db = new Sequelize(
//   'postgres://localhost:5432/analogies', {
//     logging: false
//   }
// );

// console.log('process', process.env.DATABASE_URL);

// const db = process.env.DATABASE_URL || 3000
// client = new pg.Client db
// client.connect()

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