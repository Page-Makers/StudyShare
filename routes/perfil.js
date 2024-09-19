const express = require('express');
const router = express.Router();
const checkAuth = require('../middlewares/checkAuth'); // Middleware de autenticação

// Rota para a página de perfil (protegida)
router.get('/', checkAuth, function(req, res, next) {
  res.render('perfil', { 
    title: 'Perfil do Usuário',
    user: req.session.user // Passa o usuário logado para a view
  });
});

module.exports = router;
