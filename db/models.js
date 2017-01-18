'use strict';

const Sequelize = require('sequelize');

// if (process.env.DATABASE_URL) {
//   // the application is executed on Heroku ... use the postgres database
//   sequelize = new Sequelize(process.env.DATABASE_URL, {
//     dialect:  'postgres',
//     protocol: 'postgres',
//     logging:  true //false
//   });
// } 

    // var client = new Client(process.env.DATABASE_URL); //something like this should get you running with heroku
// const db = new Sequelize(process.env.DATABASE_URL);
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