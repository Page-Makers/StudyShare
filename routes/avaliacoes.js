const express = require('express');
const router = express.Router();
const db = require('../bd/firebaseConfig');

// Middleware para adicionar usuário à requisição
router.use((req, res, next) => {
  res.locals.user = req.session.user || null; // Adiciona o usuário logado aos dados da view
  next();
});

// Rota para renderizar as avaliações de uma disciplina específica
router.get('/:periodoId/:disciplinaId', async function(req, res, next) {
  const { periodoId, disciplinaId } = req.params;

  // Verifica se o usuário está logado
  if (!req.session.user) {
    return res.redirect('/login'); // Redireciona para a página de login se não estiver logado
  }

  try {
    // Busca os detalhes da disciplina no Firebase
    const disciplinaSnapshot = await db.collection(`periodos/${periodoId}/disciplinas`).doc(disciplinaId).get();
    if (!disciplinaSnapshot.exists) {
      return res.status(404).render('error', { message: 'Disciplina não encontrada', error: {} });
    }
    const disciplinaData = disciplinaSnapshot.data();
    const nomeDisciplina = disciplinaData.nome;

    // Busca as avaliações da disciplina no Firebase, incluindo suas descrições, PDFs e links
    const avaliacoesSnapshot = await db.collection(`periodos/${periodoId}/disciplinas/${disciplinaId}/avaliacoes`).get();
    const avaliacoes = avaliacoesSnapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        nome: data.nome,
        descricao: data.descricao, // Inclui a descrição do conteúdo
        pdf: data.pdf, // Inclui o campo pdf do conteúdo
        link: data.link // Inclui o campo link do conteúdo
      };
    });

    // Renderiza o template EJS com os detalhes da disciplina e as avaliações
    res.render('avaliacoes', {
      title: `${nomeDisciplina} - Avaliações`,
      nomeDisciplina: nomeDisciplina,
      avaliacoes: avaliacoes,
      disciplinaId: disciplinaId,
      periodoId: periodoId
    });
  } catch (error) {
    console.error("Erro ao buscar avaliações da disciplina:", error);
    res.render('error', { message: 'Erro ao buscar avaliações da disciplina', error: error });
  }
});

module.exports = router;
