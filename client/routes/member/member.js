//var render = require('../render');
var proxy = require('../../controllers/proxy').proxy;
var jwt = require('jsonwebtoken');
var uuid = require('node-uuid');

exports.login = function *(){
	//var token = jwt.sign({ name: 'bod' }, 'shhhhh');
	console.log(uuid.v1());
  	this.body = yield this.render('member/login');
};

exports.isExistUser = function *(next){
	try{
	    this.body = yield proxy(this);
	}catch(e){ 
	    console.log('1111111111111');
	}
};

exports.postLogin = function *(next){
    console.log(this.request.body);
    //console.log(this.req);
    this.body = yield proxy(self);
};
