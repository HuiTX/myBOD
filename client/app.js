var app = require('koa')();

var path = require('path');
var assets = require('koa-static');
var swig = require('swig');
var router = require('./routes/router');

const viewsSettings = {
	autoescape: true,
	root: path.join(__dirname, 'views'),
	cache: 'memory',
	ext: 'swig'
	/*
	locals: {},
	filters: {}.
	tags: {},
	extensions: {}
	*/
};

// views
// app.use(swig(viewsSettings));
// app.use(function *() {
//   yield* this.render('layout');
// });
// assets
app.use(assets(__dirname + '/assets'));
// routes
app.use(router.routes())
   .use(router.allowedMethods());

app.on('error', function(err){
  log.error('server error', err);
});

module.exports = app;