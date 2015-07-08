module.exports = function(app) {
  var express = require('express');
  var articlesRouter = express.Router();

  articlesRouter.get('/', function(req, res) {
    res.send({
      'articles': []
    });
  });

  articlesRouter.get('/articles/72', function(req, res) {
    res.send({
      'article': {
        'id': 72,
        'createdAt': '2011-11-04',
        'description': 'an article',
        'state': 'borrowed',
        'notes': 'this is a note',
        'friend_id': 11
      }
    });
  });

  articlesRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  articlesRouter.get('/:id', function(req, res) {
    res.send({
      'articles': {
        id: req.params.id
      }
    });
  });

  articlesRouter.put('/:id', function(req, res) {
    res.send({
      'articles': {
        id: req.params.id
      }
    });
  });

  articlesRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/articles', articlesRouter);
};
