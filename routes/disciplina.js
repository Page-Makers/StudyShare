var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('disciplina', { title: 'Express' });
});

router.get('/introProg', function(req, res, next) {
  res.render('introProg', { title: 'Express' });
});

router.get('/admso', function(req, res, next) {
  res.render('admso', { title: 'Express' });
});

router.get('/fundProg1', function(req, res, next) {
  res.render('fundProg1', { title: 'Express' });
});

router.get('/fundProg2', function(req, res, next) {
  res.render('fundProg2', { title: 'Express' });
});

router.get('/poo', function(req, res, next) {
  res.render('poo', { title: 'Express' });
});

router.get('/bd', function(req, res, next) {
  res.render('bd', { title: 'Express' });
});

router.get('/mfds', function(req, res, next) {
  res.render('mfds', { title: 'Express' });
});

router.get('/pp1', function(req, res, next) {
  res.render('pp1', { title: 'Express' });
});

router.get('/progMoveis1', function(req, res, next) {
  res.render('progMoveis1', { title: 'Express' });
});

router.get('/redes', function(req, res, next) {
  res.render('redes', { title: 'Express' });
});

router.get('/eletroInfo', function(req, res, next) {
  res.render('eletroInfo', { title: 'Express' });
});

router.get('/pp2', function(req, res, next) {
  res.render('pp2', { title: 'Express' });
});

router.get('/progMoveis2', function(req, res, next) {
  res.render('progMoveis2', { title: 'Express' });
});

router.get('/progWeb1', function(req, res, next) {
  res.render('progWeb1', { title: 'Express' });
});

router.get('/introSegCiber', function(req, res, next) {
  res.render('introSegCiber', { title: 'Express' });
});

router.get('/pp3', function(req, res, next) {
  res.render('pp3', { title: 'Express' });
});

router.get('/progWeb2', function(req, res, next) {
  res.render('progWeb2', { title: 'Express' });
});

module.exports = router;
