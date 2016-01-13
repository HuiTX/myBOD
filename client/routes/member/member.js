//var render = require('../render');
var proxy = require('../../controllers/proxy').proxy;

exports.login = function *(){
	//this.body = yield render('login');
  this.body = yield this.render('login');
};

exports.isExistUser = function *(next){
	try{
	    this.body = yield proxy('','http://127.0.0.1:100/isExist', this);
	}catch(e){ 
	    console.log('1111111111111');
	}
};
