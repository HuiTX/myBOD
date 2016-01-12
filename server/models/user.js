var proxy = require('koa-proxy');
var request = require('co-request');

exports.isExist = function *(){

    console.log(8888888888888888888888888);
    console.log(this.request);






    try{
        proxy({
            host: this.request.header.host + this.request.originalUrl,
            map:{
              body : 'true'
            }
        });
    }catch(e){
        console.log('error')
    }
};