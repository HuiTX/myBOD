var proxy = require('../../controllers/proxy').proxy;

exports.customInfo = function *(){
  this.body = yield this.render('customer/customInfo');
};

exports.customList = function *(){
  this.body = yield this.render('customer/customList');
};

exports.majorInfo = function *(){
  this.body = yield this.render('customer/majorInfo');
};

exports.majorList = function *(){
  this.body = yield this.render('customer/majorList');
};

exports.competeInfo = function *(){
  this.body = yield this.render('customer/competeInfo');
};

exports.competeList = function *(){
  this.body = yield this.render('customer/competeList');
};

exports.keyBusiness = function *(){
  this.body = yield this.render('customer/keyBusiness');
};

exports.keyBusinessForm = function *(){
  // var form = new multiparty.Form();
  // form.parse(this.req, function(err, fields, files) {
  //   console.log(err);
  //   console.log(fields);
  //   console.log(files);

  // });
};

exports.upload = function *(){
  this.body = yield this.render('customer/upload');
};

exports.uploadFile = function *(){
    this.body = yield proxy(this);
};

exports.customBasic = function *(){
  this.body = yield this.render('customer/customBasic');
};

exports.editCustomer = function *(){
  this.body = yield this.render('customer/editCustomer');
};

exports.customListGet = function *(){
  this.body = yield proxy(this);
};