var app = require('koa')();
var render = require('koa-swig');
var assets = require('koa-static');
var session = require('koa-session');
var bodyParser = require('koa-bodyparser');
var errorhandler = require('koa-errorhandler');
var path = require('path');
var router = require('./routes/router');
var child_process = require('child_process');

app.keys = [process.env.keys || 'boa manager'];

// 启动gulp
child_process.exec('gulp build-dev', {
    cmd: process.cwd()
});

// handle
app.use(errorhandler());
app.use(bodyParser());

// session
app.keys = ['koa-sample-app'];
app.use(session(app));

// assets
app.use(assets(__dirname + '/assets'));
// views
app.context.render = render({
	root: path.join(__dirname, 'views'),
	cache: false,
	ext: 'swig'
});

// router
app.use(router.routes())
   .use(router.allowedMethods());

app.on('error', function(err){
  	log.error('server error', err);
});

module.exports = app;
