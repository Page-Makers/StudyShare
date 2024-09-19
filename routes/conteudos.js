const express = require('express');
const router = express.Router();
const db = require('../bd/firebaseConfig');

// Middleware para adicionar usuário à requisição
router.use((req, res, next) => {
  res.locals.user = req.session.user || null; // Adiciona o usuário logado aos dados da view
  next();
});

// Rota para renderizar os conteúdos de uma disciplina específica
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

    // Busca os conteúdos da disciplina no Firebase, incluindo suas descrições e PDFs
    const conteudosSnapshot = await db.collection(`periodos/${periodoId}/disciplinas/${disciplinaId}/conteudos`).get();
    const conteudos = conteudosSnapshot.docs.map(doc => {
      const data = doc.data();
      return {
        id: doc.id,
        nome: data.nome,
        descricao: data.descricao, // Inclui a descrição do conteúdo
        pdf: data.pdf // Inclui o campo pdf do conteúdo
      };
    });

    // Renderiza o template EJS com os detalhes da disciplina e os conteúdos
    res.render('conteudos', {
      title: `${nomeDisciplina} - Conteúdos`,
      nomeDisciplina: nomeDisciplina,
      conteudos: conteudos,
      disciplinaId: disciplinaId,
      periodoId: periodoId
    });
  } catch (error) {
    console.error("Erro ao buscar conteúdos da disciplina:", error);
    res.render('error', { message: 'Erro ao buscar conteúdos da disciplina', error: error });
  }
});

module.exports = router;
