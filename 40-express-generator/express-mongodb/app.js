const express = require('express'),
			path = require('path'),
			favicon = require('serve-favicon'),
			logger = require('morgan'),
			cookieParser = require('cookie-parser'),
			bodyParser = require('body-parser'),
			expressValidator = require('express-validator'),
			expressSession = require('express-session'),

			index = require('./routes/index'),
			users = require('./routes/users'),

			app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator()); // only after bodyParser
app.use(cookieParser());
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(expressSession({
	secret: 'is0m7jim()',
	saveUninitialized: false,
	resave: false
 }));

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;