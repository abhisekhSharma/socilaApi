var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var Twitter = require('twitter');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

var client = new Twitter({
  consumer_key: 'VjqMeCnzQtnVYuVeNRQnGt6Nx',
  consumer_secret: 'FM6QzFbmoOGG013IMX6mXkdnh3yt3KHzDN7lJdeflsbAME9Lws',
  access_token_key: '133309924-xJDNkhzFI2ZcDKGRAT78I5nvktfnFuaZqn9pmUfp',
  access_token_secret: 'bCK4nnwAcdrm4g3WETpGS68O5tt0Xkao2IXl7GSM82yNZ'
});


app.get('/twitterRes', function(req, res) {
   var options = { screen_name: 'marksandspencer'};
    client.get('users/show', options , function(err, data) {
              res.send(data);
      });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});



// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});





module.exports = app;
