var express = require('express');
var router = express.Router();
var db = require('../bd/firebaseConfig'); 

// Middleware para adicionar usuário à requisição
router.use((req, res, next) => {
  res.locals.user = req.session.user || null; // Adiciona o usuário logado aos dados da view
  next();
});

router.get('/', async function(req, res, next) {
  try {
    // Busca todos os períodos do Firebase
    const periodosSnapshot = await db.collection('periodos').get();
    const periodos = [];

    periodosSnapshot.forEach((doc) => {
      periodos.push({ id: doc.id, ...doc.data() });
    });

    res.render('periodos', { title: 'Períodos', periodos: periodos });
  } catch (error) {
    console.error("Error fetching periods: ", error);
    res.render('error', { message: 'Error fetching periods', error: error });
  }
});

module.exports = router;
