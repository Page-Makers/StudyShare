const express = require('express');
const router = express.Router();
const { auth, createUserWithEmailAndPassword } = require('../bd/firebase');

router.get('/', function(req, res) {
  res.render('cadastrar', {
    success_msg: req.flash('success_msg'),
    error_msg: req.flash('error_msg')
  });
});

router.post('/', async function(req, res) {
  const { nome, email, senha, confirmarSenha } = req.body;

  if (senha !== confirmarSenha) {
    req.flash('error_msg', 'As senhas não correspondem.');
    return res.redirect('/cadastrar');
  }

  try {
    await createUserWithEmailAndPassword(auth, email, senha);
    req.flash('success_msg', 'Parabéns! Sua conta foi criada com sucesso. Você já pode acessar sua conta e começar a explorar o StudyShare. <a href="/login">Clique aqui para fazer login.</a>');

    res.redirect('/cadastrar/success');
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      req.flash('error_msg', 'Este email já está em uso.');
      return res.redirect('/cadastrar');
    }
    req.flash('error_msg', 'Erro ao criar conta: ' + error.message);
    res.redirect('/cadastrar');
  }
});

// Nova rota para exibir a mensagem de sucesso
router.get('/success', (req, res) => {
  res.render('cadastrar-success', {
    success_msg: req.flash('success_msg')
  });
});


module.exports = router;
