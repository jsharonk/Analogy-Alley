'use strict';

const Sequelize = require('sequelize');

// if (process.env.DATABASE_URL) {
//   // the application is executed on Heroku ... use the postgres database
//   const db= new Sequelize('postgres://yhtjhkxdmlkzve:1a0ee89930c458502f1c5996812ce2dd96a9486d189e1310b19833ab332007a0@ec2-54-243-185-99.compute-1.amazonaws.com:5432/dboh53q03qs7f8'
// , {
//     dialect:  'postgres',
//     protocol: 'postgres',
//     logging:  true //false
//   });
// } else {
//   // the application is executed on the local machine
//   // sequelize = new Sequelize("postgres:///my_db");
//   const db = new Sequelize(
//   'postgres://localhost:5432/analogies', {
//     logging: false
//   }
// );
// }
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