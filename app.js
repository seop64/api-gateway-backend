var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var moviesRouter = require('./routes/movies');  // 라우터 추가

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


// front 연결
// app.use(require('connect-history-api-fallback')());


const history = require('connect-history-api-fallback'); //여기

app.use('/users', usersRouter);
app.use('/api/movies', moviesRouter); // /api/movies 추가

// ============================================================
// 에러 해결 : https://stackoverflow.com/questions/48745756/how-to-use-vuejs-routing-with-history-fallback-and-expressjs-routes
// 이거 안됨 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// app.use('/', indexRouter);
// app.use(history);
// app.use(express.static(path.join(__dirname, 'public')));

// 이거가 된다!!!!!!!!!!!!!!!!!!
app.use(history({
  verbose: true
}));
app.use('/', express.static(path.join(__dirname, 'public')));
// ============================================================


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


// 포트 변경
/*
app.set('port', process.env.PORT || 8080);
  
var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});
*/


module.exports = app;
