'use strict';

var app = require('koa')();
var router = require('./routes');

// routes
app.use(router.routes())
   .use(router.allowedMethods());

app.on('error', function(err){
  log.error('server error', err);
});

module.exports = app;