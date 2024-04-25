var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var indexRouter = require('./routes/index'); //rota página inicial "index"
var usersRouter = require('./routes/users'); //rota users
var entrarRouter = require('./routes/entrar'); //rota login
var periodoRouter = require('./routes/periodo'); //rotas dos períodos
var disciplinaRouter = require('./routes/disciplina'); //rota das disciplinas
var conteudosRouter = require('./routes/conteudos'); //rota dos conteúdo
var avaliacoesRouter = require('./routes/avaliacoes'); //rota das avaliações
var perfilRouter = require('./routes/perfil'); //rota do perfil


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter); //página inicial "index"
app.use('/users', usersRouter); //users
app.use('/entrar', entrarRouter); //login
app.use('/periodo', periodoRouter); //períodos
app.use('/disciplina', disciplinaRouter); //disciplinas
app.use('/conteudos', conteudosRouter); //conteúdos
app.use('/avaliacoes', avaliacoesRouter); //avaliações
app.use('/perfil', perfilRouter); //perfil

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
