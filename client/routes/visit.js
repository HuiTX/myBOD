const Router = require('koa-router');
const proxy = require('../middleware/proxy');
const util = require('util');
const router = new Router();

router
// list
.get('/', function* () {
  yield this.render('visit/visitList');
})
// before
.get('/before', function* () {
  var dictName = [
    'boi_relation',
    'boi_stage',
    'vr_purpose',
    'vr_way'
  ];
  var dicts = yield proxy.run(this, util.format('/dict?dict=%s', dictName.join('&dict=')));
  dicts = tryParseJSON(dicts);

  var director = yield proxy.run(this, util.format('/director?role&customer_id=%s', this.request.query.c));
  director = tryParseJSON(director);

  yield this.render('visit/visitBefore', {
    dicts: dicts.items,
    director: director.items
  });
})

// after
.get('/after', function* () {
  var dictName = [
    'vr_cost',
    'vr_promise',
    'vr_next',
    'vr_result'
  ];
  var dicts = yield proxy.run(this, util.format('/dict?dict=%s', dictName.join('&dict=')));
  dicts = tryParseJSON(dicts);

  yield this.render('visit/visitAfter', {
    dicts: dicts.items
  });
})
// personal
.get('/personal', function* () {
  yield this.render('visit/visitListPersonal');
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
