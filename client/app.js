'use strict';

var app = require('koa')();
var render = require('koa-swig');
var assets = require('koa-static');
var session = require('koa-session');
var bodyParser = require('koa-bodyparser');
var errorhandler = require('koa-errorhandler');
var path = require('path');
var fs = require('fs');
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
app.use(assets(__dirname + '/dist'));
// views
app.context.render = render({
	root: path.join(__dirname, 'views'),
	cache: false,
	ext: 'swig',
	varControls: ['{$', '$}']
});

// router
app.use(router.routes())
   .use(router.allowedMethods());

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
