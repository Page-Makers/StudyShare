const express = require('express');
const router = express.Router();
const db = require('../bd/firebaseConfig');
const checkAuth = require('../middlewares/checkAuth'); // Middleware de autenticação

// Rota dinâmica para os materiais de uma disciplina específica (protegida)
router.get('/:periodoId/:disciplinaId', checkAuth, async function(req, res, next) {
  const periodoId = req.params.periodoId;
  const disciplinaId = req.params.disciplinaId;

  try {
    // Busca os dados da disciplina no banco de dados usando o ID recebido na rota
    const disciplinaDoc = await db.collection('periodos').doc(periodoId).collection('disciplinas').doc(disciplinaId).get();
    if (!disciplinaDoc.exists) {
      return res.status(404).render('error', { message: 'Disciplina não encontrada', error: {} });
    }

    const disciplinaData = disciplinaDoc.data();
    const nomeDisciplina = disciplinaData.nome;
    const imagemDisciplinaBanner = disciplinaData.imagemBanner;  // Assume que o campo "imagem" contém o nome ou URL da imagem

    // Renderiza a página de materiais com os dados da disciplina
    res.render('materiais', { 
      title: 'Materiais', 
      nomeDisciplina: nomeDisciplina, 
      disciplinaId: disciplinaId, 
      periodoId: periodoId,
      imagemDisciplinaBanner: imagemDisciplinaBanner,  // Passa o link da imagem para a view
      user: req.session.user  // Passa o usuário logado para a view
    });
  } catch (error) {
    console.error("Erro ao buscar materiais: ", error);
    res.render('error', { message: 'Erro ao buscar materiais', error: error });
  }
});

module.exports = router;
