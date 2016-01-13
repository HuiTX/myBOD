var app = require('koa')();
var render = require('koa-swig');
var assets = require('koa-static');
var bodyParser = require('koa-bodyparser');
var errorhandler = require('koa-errorhandler');
var path = require('path');
var router = require('./routes/router');

app.keys = [process.env.keys || 'boa manager'];

// handle
app.use(errorhandler());
app.use(bodyParser());
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