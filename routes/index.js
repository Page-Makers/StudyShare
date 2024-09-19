var express = require('express');
var router = express.Router();

// Middleware para adicionar usuário à requisição
router.use((req, res, next) => {
  res.locals.user = req.session.user || null; // Adiciona o usuário logado aos dados da view
  next();
});

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
