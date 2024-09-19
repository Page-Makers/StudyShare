var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('periodos', { title: 'Express' });
});

router.get('/p1', function(req, res, next) {
  res.render('p1', { title: 'Express' });
});

router.get('/p2', function(req, res, next) {
  res.render('p2', { title: 'Express' });
});

router.get('/p3', function(req, res, next) {
  res.render('p3', { title: 'Express' });
});

router.get('/p4', function(req, res, next) {
  res.render('p4', { title: 'Express' });
});

router.get('/p5', function(req, res, next) {
  res.render('p5', { title: 'Express' });
});

router.get('/p6', function(req, res, next) {
  res.render('p6', { title: 'Express' });
});
module.exports = router;
