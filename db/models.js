'use strict';

// const Sequelize = require('sequelize');

// const DATABASE_URI = require(path.join(__dirname, '../env')).DATABASE_URI;

if (!global.hasOwnProperty('db')) {
  var Sequelize = require('sequelize')
    , sequelize = null

  if (process.env.HEROKU_POSTGRESQL_RED_URL) {
    // the application is executed on Heroku ... use the postgres database
    sequelize = new Sequelize(process.env.HEROKU_POSTGRESQL_RED_URL, {
      dialect:  'postgres',
      protocol: 'postgres',
      port:     match[4],
      host:     match[3],
      logging:  true //false
    })
  } else {
     const db = new Sequelize(
      'postgres://localhost:5432/analogies', {
        logging: false
      }
   );
  }

  // global.db = {
  //   Sequelize: Sequelize,
  //   sequelize: sequelize,
  //   User:      sequelize.import(__dirname + '/user') 
    
    // add your other models here
  }

  /*
    Associations can be defined here. E.g. like this:
    global.db.User.hasMany(global.db.SomethingElse)
  */
// }

// module.exports = global.db



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