const babelRegister = require('babel-register');
const express = require('express');
const app = express();

const morgan = require('morgan');
const bodyParser = require('body-parser');

const models = require('./db/models');
const Analogy = models.Analogy;

const path = require('path');

app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, './public')));

app.use(bodyParser.urlencoded( {extended: false}));
app.use(bodyParser.json());

// app.get('/', function(req, res) {
//   res.redirect('/analogies');
// });
app.use('/analogies', require('./server/analogies-subrouter'));

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});


app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send(err.message);
});

Analogy.sync({})
  // .then(function() {
  //   return Source.sync({});
  // })
  .then(function() {
    app.listen(3000, function() {
      // return console.error(err);
      console.log('server listening attentively on 3000!')
    });
  });


  module.exports = app;