const express = require('express');
const router = express.Router();
const { auth, signInWithEmailAndPassword } = require('../bd/firebase');

// Rota para exibir a página de login
router.get('/', function(req, res) {
  res.render('login', { title: 'Entrar' });
});

router.post('/', async function(req, res, next) {
  const { email, senha } = req.body;

  try {
    // Autenticar o usuário com email e senha
    const userCredential = await signInWithEmailAndPassword(auth, email, senha);
    const user = userCredential.user;

    // Salvar o usuário na sessão
    req.session.user = user;

    // Redirecionar para a página de perfil após o login bem-sucedido
    return res.redirect('/perfil');
  } catch (error) {
    console.error('Erro ao fazer login:', error);

    // Renderizar a página de login novamente com uma mensagem de erro
    return res.render('login', { 
      title: 'Entrar', 
      errorMessage: 'Email ou senha inválidos. Por favor, tente novamente.'
    });
  }
});

module.exports = router;
