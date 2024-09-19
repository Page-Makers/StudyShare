var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('avaliacoes', { title: 'Express' });
});

router.get('/introProg', function(req, res, next) {
  res.render('introProgAvaliacoes', { title: 'Express' });
});

router.get('/admso', function(req, res, next) {
  res.render('admsoAvaliacoes', { title: 'Express' });
});

router.get('/fundProg1', function(req, res, next) {
  res.render('fundProg1Avaliacoes', { title: 'Express' });
});

router.get('/fundProg2', function(req, res, next) {
  res.render('fundProg2Avaliacoes', { title: 'Express' });
});

router.get('/poo', function(req, res, next) {
  res.render('pooAvaliacoes', { title: 'Express' });
});

router.get('/bd', function(req, res, next) {
  res.render('bdAvaliacoes', { title: 'Express' });
});

router.get('/mfds', function(req, res, next) {
  res.render('mfdsAvaliacoes', { title: 'Express' });
});

router.get('/pp1', function(req, res, next) {
  res.render('pp1Avaliacoes', { title: 'Express' });
});

router.get('/progMoveis1', function(req, res, next) {
  res.render('progMoveis1Avaliacoes', { title: 'Express' });
});

router.get('/redes', function(req, res, next) {
  res.render('redesAvaliacoes', { title: 'Express' });
});

router.get('/eletroInfo', function(req, res, next) {
  res.render('eletroInfoAvaliacoes', { title: 'Express' });
});

router.get('/pp2', function(req, res, next) {
  res.render('pp2Avaliacoes', { title: 'Express' });
});

router.get('/progMoveis2', function(req, res, next) {
  res.render('progMoveis2Avaliacoes', { title: 'Express' });
});

router.get('/progWeb1', function(req, res, next) {
  res.render('progWeb1Avaliacoes', { title: 'Express' });
});

router.get('/introSegCiber', function(req, res, next) {
  res.render('introSegCiberAvaliacoes', { title: 'Express' });
});

router.get('/pp3', function(req, res, next) {
  res.render('pp3Avaliacoes', { title: 'Express' });
});

router.get('/progWeb2', function(req, res, next) {
  res.render('progWeb2Avaliacoes', { title: 'Express' });
});

module.exports = router;
