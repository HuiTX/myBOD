const Router = require('koa-router');
const router = new Router();
const proxy = require('../middleware/proxy');
const util = require('util');

router
// list
.get('/', function* () {
  yield this.render('customer/customList');
})
// personal
.get('/personal', function* () {
  yield this.render('customer/customListPersonal');
})
// editor
.get('/editor', function* () {
  yield this.render('customer/editCustomer');
})
// info
.get('/info', function* () {
  yield this.render('customer/customInfo');
})
// info basic
.get('/info/basic', function* () {
  var dictName = [
    'boi_stage',
    'boi_budget',
    'boi_price',
    'cust_industry',
    'cust_income',
    'cust_employees',
    'cust_procurement',
    'cust_origin'
  ];
  var dicts = yield proxy.run(this, util.format('/dict?dict=%s', dictName.join('&dict=')));
  dicts = tryParseJSON(dicts);

  yield this.render('customer/customBasic', {
    dicts: dicts.items
  });
})


module.exports = router;


function tryParseJSON (data) {
  if (typeof data === 'string') {
    try {
      return JSON.parse(data);
    }
    catch (ex) {
      return {};
    }
  } else {
    return data;
  }
}
