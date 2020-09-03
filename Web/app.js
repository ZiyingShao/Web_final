"use strict";
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var flash = require('connect-flash');
var session = require('express-session');
var passport = require('passport');
// var csrf = require('csurf');
require('./config/passport')(passport);


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// app.use(function (req,res,next) {
//   const url = req.url;

//   res.setHeader('Content-Type', 'text/html');

//   if(valid(url)==false){
//     console.log('current request url is:',url);
//     next(createError(403));
//     console.log('Invalid URL');
//   }
//   else{
//     if(url == './config/passport'){
//       console('...................................................');
//     }
//     next();
//   }
// })
//app.engine('pug', require('pug').__express)

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
//app.use(csrf({cookie: true}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(session({
    secret: 'secret',
    saveUninitialized: false,
    resave: false
}));

app.use(passport.initialize());
app.use(passport.session());


app.use(flash());


app.use(function (req, res, next) {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
});


app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
//app.use(csrf({cookie: true}));

// app.use(function (req, res, next) {
//   res.cookie('XSRF-TOKEN', req.csrfToken());
//   res.locals.flash_error_message = req.csrfToken();
//   next();
// });


// catch 404 and forward to error handler
// app.use(function (req, res, next) {
//     next(createError(404));
// });

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

// authenticate requests

//app.post('/login', 
// passport.authenticate('local', {failureRedirect: '/login' }),
// function(req, res) {
//  res.redirect('/');
// });

app.listen('5000', function () {
        console.log("Server is at localhost:5000");
});


module.exports = app;