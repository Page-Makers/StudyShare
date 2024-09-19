var express = require('express');
var router = express.Router();
var db = require('../bd/firebaseConfig'); 

// Middleware para adicionar usuário à requisição
router.use((req, res, next) => {
  res.locals.user = req.session.user || null; // Adiciona o usuário logado aos dados da view
  next();
});

// Rota dinâmica para disciplinas de um período específico
router.get('/:periodoId', async function(req, res, next) {
  const periodoId = req.params.periodoId;

  try {
    // Busca o documento do período
    const periodoDoc = await db.collection('periodos').doc(periodoId).get();
    if (!periodoDoc.exists) {
      return res.status(404).render('error', { message: 'Período não encontrado', error: {} });
    }
    const nomePeriodo = periodoDoc.data().nome;

    // Busca as disciplinas dentro do documento do período especificado
    const disciplinasSnapshot = await db.collection('periodos').doc(periodoId).collection('disciplinas').get();
    const disciplinas = [];

    disciplinasSnapshot.forEach((doc) => {
      disciplinas.push({ id: doc.id, ...doc.data() });
    });

    res.render('disciplinas', { 
      title: 'Disciplinas', 
      disciplinas: disciplinas, 
      nomePeriodo: nomePeriodo 
    });
  } catch (error) {
    console.error("Error fetching disciplines: ", error);
    res.render('error', { message: 'Error fetching disciplines', error: error });
  }
});

module.exports = router;
