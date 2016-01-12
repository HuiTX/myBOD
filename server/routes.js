var router = require('koa-router')();
var User = require('./models/user');

router.get('/', function *(){
	console.log(11111111111111);
});

router.get('/isExist', User.isExist);

router.get('/testSql', User.testSql);

module.exports = router;