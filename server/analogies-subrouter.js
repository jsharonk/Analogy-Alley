'use strict';

const express = require('express');
const router = express.Router();

const models = require('../db/models');
const Analogy = models.Analogy;

// /api
router.get('/', function (req, res, next) {
  Analogy.findAll({where: req.query})
  .then(analogies => res.json(analogies))
  .catch(next);
});
// /api/:id
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

// /api 
router.post('/', function(req, res, next) {
  Analogy.create(req.body)
  .then(createdAnalogy => res.status(201).json(createdAnalogy))
  .catch(next);
});

router.delete('/:id', function(req, res, next) {
  Analogy.findById(id)
  .then(analogy => {
    analogy.destroy()
  })
  
  .then(() => res.status(204).end())
  .catch(next);
});

router.get('/:id', function (req, res, next) {

    Analogy.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(function () {
            res.redirect('/analogies');
        })
        .catch(next);

});
 router.put('/', function(req, res, next) {
   Analogy.update({
          name: req.body.name || analogy.name,
          content: req.body.content || analogy.content},
          {
            where: {
              id: req.params.id
            }
        })
      .then(function(updatedAnalogy) {
        res.json({
          message: 'Updated successfully',
          analogy: updatedAnalogy
        });
      })
    .catch(function(err) {
      console.log('boop!', err);
    });

});


module.exports=router;