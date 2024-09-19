// middlewares/checkAuth.js

function checkAuth(req, res, next) {
    if (req.session.user) {
        return next(); // Usuário autenticado, prossegue para a rota
    } else {
        return res.redirect('/login'); // Redireciona para a página de login se não estiver autenticado
    }
}

module.exports = checkAuth;
