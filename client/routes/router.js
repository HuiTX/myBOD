
var router = require('koa-router')();

// list of nested routers
const account  = require('./account');
const customer = require('./customer');
const director = require('./director');
const visit    = require('./visit');


// alias
router.get('/', function *(){
    //this.body = yield render('index');
    this.response.redirect('/customer')
});

// page router
router.use(account.routes(), account.allowedMethods());
router.use('/customer', customer.routes(), customer.allowedMethods());
router.use('/director', director.routes(), director.allowedMethods());
router.use('/visit', visit.routes(), visit.allowedMethods());

module.exports = router;
