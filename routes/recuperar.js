var express = require('express');
var router = express.Router();
const { auth, sendPasswordResetEmail } = require('../bd/firebase.js'); // Atualize a importação

// Rota para renderizar a página de recuperação de senha
router.get('/', function(req, res, next) {
  res.render('recuperar', { title: 'Recuperar Senha', successMessage: req.flash('success_msg'), errorMessage: req.flash('error_msg') });
});

// Rota para enviar o e-mail de recuperação
router.post('/', async function(req, res, next) {
  const { email } = req.body;

  try {
    // Enviar e-mail de recuperação de senha
    await sendPasswordResetEmail(auth, email); // Atualize a chamada da função
    res.render('aviso-enviado', { email: email }); // Renderiza a página de confirmação
  } catch (error) {
    console.error('Erro ao enviar o e-mail de recuperação:', error);
    req.flash('error_msg', 'Erro ao enviar o e-mail: ' + error.message);
    res.redirect('/recuperar');
  }
});

module.exports = router;
