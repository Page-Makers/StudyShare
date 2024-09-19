var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('conteudos', { title: 'Express' });
});

router.get('/introProg', function(req, res, next) {
  res.render('introProgConteudos', { title: 'Express' });
});

router.get('/admso', function(req, res, next) {
  res.render('admsoConteudos', { title: 'Express' });
});

router.get('/fundProg1', function(req, res, next) {
  res.render('fundProg1Conteudos', { title: 'Express' });
});

router.get('/fundProg2', function(req, res, next) {
  res.render('fundProg2Conteudos', { title: 'Express' });
});

router.get('/poo', function(req, res, next) {
  res.render('pooConteudos', { title: 'Express' });
});

router.get('/bd', function(req, res, next) {
  res.render('bdConteudos', { title: 'Express' });
});

router.get('/mfds', function(req, res, next) {
  res.render('mfdsConteudos', { title: 'Express' });
});

router.get('/pp1', function(req, res, next) {
  res.render('pp1Conteudos', { title: 'Express' });
});

router.get('/progMoveis1', function(req, res, next) {
  res.render('progMoveis1Conteudos', { title: 'Express' });
});

router.get('/redes', function(req, res, next) {
  res.render('redesConteudos', { title: 'Express' });
});

router.get('/eletroInfo', function(req, res, next) {
  res.render('eletroInfoConteudos', { title: 'Express' });
});

router.get('/pp2', function(req, res, next) {
  res.render('pp2Conteudos', { title: 'Express' });
});

router.get('/progMoveis2', function(req, res, next) {
  res.render('progMoveis2Conteudos', { title: 'Express' });
});

router.get('/progWeb1', function(req, res, next) {
  res.render('progWeb1Conteudos', { title: 'Express' });
});

router.get('/introSegCiber', function(req, res, next) {
  res.render('introSegCiberConteudos', { title: 'Express' });
});

router.get('/pp3', function(req, res, next) {
  res.render('pp3Conteudos', { title: 'Express' });
});

router.get('/progWeb2', function(req, res, next) {
  res.render('progWeb2Conteudos', { title: 'Express' });
});

module.exports = router;
