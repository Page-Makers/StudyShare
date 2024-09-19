const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const flash = require('connect-flash');
var createError = require('http-errors');
var db = require('./bd/firebaseConfig');

var indexRouter = require('./routes/index');
var avaliacoesRouter = require('./routes/avaliacoes');
var conteudosRouter = require('./routes/conteudos');
var disciplinasRouter = require('./routes/disciplinas');
var materiaisRouter = require('./routes/materiais');
var periodosRouter = require('./routes/periodos');

var perfilRouter = require('./routes/perfil');
var enviarMaterialRouter = require('./routes/enviarMaterial');
var termosRouter = require('./routes/termos');
var politicaRouter = require('./routes/politica');

var loginRouter = require('./routes/login');
var logoutRouter = require('./routes/logout');
var cadastrarRouter = require('./routes/cadastrar');
var recuperarRouter = require('./routes/recuperar');

var app = express();

// Configuração de view engine e middlewares
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Configuração de sessões e flash messages
app.use(session({
  secret: 'AIzaSyBjFmgq2alFwZ4MXwdmx1Ia8cf7XGejLn8', // Substitua pelo seu segredo
  resave: false,
  saveUninitialized: true
}));

app.use(flash());

// Middleware para passar mensagens para as views
app.use((req, res, next) => {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  next();
});

// Definição das rotas
app.use('/', indexRouter);
app.use('/avaliacoes', avaliacoesRouter);
app.use('/conteudos', conteudosRouter);
app.use('/disciplinas', disciplinasRouter);
app.use('/materiais', materiaisRouter);
app.use('/periodos', periodosRouter);

app.use('/perfil', perfilRouter);
app.use('/enviarMaterial', enviarMaterialRouter);
app.use('/termos', termosRouter);
app.use('/politica', politicaRouter);

app.use('/login', loginRouter);
app.use('/logout', logoutRouter);
app.use('/cadastrar', cadastrarRouter);
app.use('/recuperar', recuperarRouter);

// Tratamento de erros
app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
