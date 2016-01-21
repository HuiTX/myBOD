var Member = require('./member/member');
var Customer = require('./customer/customer');
var Visit = require('./visit/visit');
var router = require('koa-router')();
//var render = require('./render');

/* GET home page. */
router.get('/', function *(){
    //this.body = yield render('index');
    this.response.redirect('/customList')
});

// member
router.get('/login', Member.login);
router.get('/isExist-user', Member.isExistUser);
router.post('/postLogin', Member.postLogin);

// Customer
router.get('/customList', Customer.customList);
router.get('/customInfo', Customer.customInfo);
router.get('/customBasic', Customer.customBasic);
router.get('/editCustomer', Customer.editCustomer);
router.get('/majorInfo', Customer.majorInfo);
router.get('/majorList', Customer.majorList);
router.get('/competeInfo', Customer.competeInfo);
router.get('/competeList', Customer.competeList);
router.get('/keyBusiness', Customer.keyBusiness);
router.post('/keyBusiness/:key', Customer.keyBusinessForm);
router.get('/upload', Customer.upload);
router.post('/upload/:file', Customer.uploadFile);

// Visit
router.get('/visitList', Visit.visitList);
router.get('/visitInfo', Visit.visitInfo);

module.exports = router;