var app = require('koa')();
var assets = require('koa-static');
var errorhandler = require('koa-errorhandler');
var render = require('koa-swig');
var path = require('path');
var router = require('./routes/router');

app.keys = [process.env.keys || 'boa manager'];

// error handle
app.use(errorhandler());

// assets
app.use(assets(__dirname + '/assets'));
// views
app.context.render = render({
	root: path.join(__dirname, 'views'),
	cache: 'memory',
	ext: 'swig'
});
// routes
app.use(router.routes())
   .use(router.allowedMethods());

app.on('error', function(err){
  log.error('server error', err);
});

module.exports = app;