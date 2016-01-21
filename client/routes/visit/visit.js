var proxy = require('../../controllers/proxy').proxy;

exports.visitInfo = function *(){
  this.body = yield this.render('visit/visitInfo');
};

exports.visitList = function *(){
  this.body = yield this.render('visit/visitList');
};