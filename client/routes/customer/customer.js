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
  this.body = yield this.render('index');
};

exports.upload = function *(){
  this.body = yield this.render('customer/upload');
};

exports.uploadFile = function *(){
    console.log(11111111111111111111);
  console.log(this.res);
  console.log(this.req.file);
  console.log(this.req.files);
  console.log(this.req.file);
  console.log(this.req.files);
  //this.body = yield this.render('customer/upload');
};
