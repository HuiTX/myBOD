var Member = require('./member/member');
var router = require('koa-router')();
var render = require('./render');

/* GET home page. */
router.get('/', function *(){
	if (!this.session) {
    	this.response.redirect('/login.html');
    	return;
	}

    this.body = yield render('index');
});

// member
router.get('/login.html', Member.login);
router.get('/isExist-user', Member.isExistUser);

module.exports = router;