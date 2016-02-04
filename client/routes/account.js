const Router = require('koa-router');
const router = new Router();

router
// login
.get('/login', function* () {
  yield this.render('member/login');
});


module.exports = router;
