var router = require('koa-router')();
var User = require('./models/user');
var Custom = require('./models/custom');

router.get('/', function *(){
	console.log(11111111111111);
});

router.get('/isExist-user', User.isExist);
router.post('/isExist', User.isExist);

router.post('/postLogin', User.postLogin);
// 创建数据库表
router.get('/custom', Custom.createTable);
router.get('/custom/:action', Custom.customInfo);

module.exports = router;