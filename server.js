// Based on: http://scotch.io/bar-talk/setting-up-a-mean-stack-single-page-application
// modules =================================================
var express  = require('express');
var app      = express();
var mongoose = require('mongoose');

// configuration ===========================================

// config files
var db = require('./config/db');

var port = process.env.PORT || 8080;
mongoose.connect(db.url);

app.configure(function () {
  app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users
  app.use(express.logger('dev'));                 // log every request to the console
  app.use(express.bodyParser());                  // have the ability to pull information from html in POST
  app.use(express.methodOverride());              // have the ability to simulate DELETE and PUT
});

// routes ==================================================
require('./app/routes')(app);

// start app ===============================================
app.listen(port);
console.log('App started on port ' + port);
exports = module.exports = app;