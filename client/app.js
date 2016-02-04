'use strict';

var path         = require('path');
var fs           = require('fs');
var app          = require('koa')();
var logger       = require('koa-logger')
var render       = require('koa-swig');
var assets       = require('koa-static');
var session      = require('koa-session');
var locale       = require('koa-locale');
var bodyParser   = require('koa-bodyparser');
var errorhandler = require('koa-errorhandler');
var router       = require('./routes/router');

app.keys = [process.env.keys || 'boa manager'];

// middleware, order is important
app.use(logger());
app.use(bodyParser()); // parse body content to json for 'this.body'
app.use(errorhandler()); // error
app.use(require('./middleware/proxy')); // proxy '/api' request to sever

// session
app.keys = ['koa-sample-app'];
app.use(session(app));
locale(app, 'language');

// assets
app.use(assets(__dirname + '/dist'));

// views
app.context.render = render({
  root: path.join(__dirname, 'views'),
  cache: process.env.NODE_ENV === 'development' ? false : true,
  ext: 'swig',
  varControls: ['{$', '$}']
});

// router
app.use(router.routes())
   .use(router.allowedMethods());

// file upload error
app.on('error', function (err, obj){
  try{
    var HEADERS = obj.request.headers;
    if (HEADERS['content-type'].toLowerCase().indexOf('multipart/') >= 0) {
      fs.unlink(HEADERS.filespath, function(err){
        if (err) throw err;
          console.log('successfully deleted ' + HEADERS.filespath);
      });
    }
  }catch(e){
    console.error('server error', err);
  }
});

module.exports = app;
