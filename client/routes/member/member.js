var render = require('../render');
var request = require('co-request');

exports.login = function *(){
	this.body = yield render('login');
};

exports.isExist = function *(next){
	var proxyRequest = {
      url: 'http://127.0.0.1:100/isExist',
      headers: { 'User-Agent': 'API-Proxy' },
      //headers: this.header,
      //encoding: null,
      method: 'get'
    };

    try {
        result = yield request.get(proxyRequest);
    } catch (err) {
        this.status = err.status || 500;
        this.body = {
          status: 'error',
          statusCode: err.status,
          message: err.message
        };
        return;
    }

    console.log(result.body);

    // var res = yield pipeRequest(this.req, request(opt));

};

function pipeRequest(readable, requestThunk){
  return function(cb){
    readable.pipe(requestThunk(cb));
  }
};