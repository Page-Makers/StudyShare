const express = require('express');
const router = express.Router();

// Rota para logout
router.post('/', (req, res) => {
  // Encerrar a sessão do usuário
  req.session.destroy(err => {
    if (err) {
      console.error('Erro ao encerrar sessão:', err);
      return res.status(500).send('Erro ao encerrar sessão');
    }
    // Redirecionar para a página inicial após o logout
    res.redirect('/');
  });
});

module.exports = router;
