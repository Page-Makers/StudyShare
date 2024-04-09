var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var entrarRouter = require('./routes/entrar');
var p1Router = require('./routes/p1');
var p2Router = require('./routes/p2');
var p3Router = require('./routes/p3');
var p4Router = require('./routes/p4');
var p5Router = require('./routes/p5');
var p6Router = require('./routes/p6');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/entrar', entrarRouter);
app.use('/p1', p1Router);
app.use('/p2', p2Router);
app.use('/p3', p3Router);
app.use('/p4', p4Router);
app.use('/p5', p5Router);
app.use('/p6', p6Router);


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
