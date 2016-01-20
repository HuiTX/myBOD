var Member = require('./member/member');
var Customer = require('./customer/customer');
var router = require('koa-router')();
//var render = require('./render');

/* GET home page. */
router.get('/', function *(){
    //this.body = yield render('index');
    this.response.redirect('/keyBusiness')
});

// member
router.get('/login', Member.login);
router.get('/isExist-user', Member.isExistUser);
router.post('/postLogin', Member.postLogin);

// Customer
router.get('/customInfo', Customer.customInfo);
router.get('/customList', Customer.customList);
router.get('/majorInfo', Customer.majorInfo);
router.get('/majorList', Customer.majorList);
router.get('/competeInfo', Customer.competeInfo);
router.get('/competeList', Customer.competeList);
router.get('/keyBusiness', Customer.keyBusiness);
router.post('/keyBusiness/:key', Customer.keyBusinessForm);
router.get('/upload', Customer.upload);
router.post('/upload/:file', Customer.uploadFile);

module.exports = router;