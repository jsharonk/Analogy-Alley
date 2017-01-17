'use strict';

const express = require('express');
const router = express.Router();

const models = require('../db/models');
const Analogy = models.Analogy;

// /analogies
router.get('/', function (req, res, next) {
  Analogy.findAll({where: req.query})
  .then(analogies => res.json(analogies))
  .catch(next);
});
// /analogies/:id
router.get('/:id', function (req, res, next) {
  
  Analogy.findById(id)
  .then(analogy => {
    if (!analogy) {
      const err = Error('analogy not found');
      err.status = 404;
      throw err;
    } else {
      res.json(analogy);
    }
  

  })
  .catch(next);
});

// /analogies
router.post('/', function(req, res, next) {
  Analogy.create(req.body)
  .then(createdAnalogy => res.status(201).json(createdAnalogy))
  .catch(next);
});


module.exports=router;