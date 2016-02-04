const Router = require('koa-router');
const router = new Router();
const proxy = require('../middleware/proxy');
const util = require('util');

router
// list
.get('/', function* () {
  yield this.render('customer/majorList');
})
// info
.get('/info', function* () {
  var dictName = [
    'boi_role',
    'boi_relation',
    'boi_requirement',
    'dir_position'
  ];
  var dicts = yield proxy.run(this, util.format('/dict?dict=%s', dictName.join('&dict='))),
  dicts = tryParseJSON(dicts);

  yield this.render('customer/majorInfo', {
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