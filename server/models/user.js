var request = require('co-request');
var mysql = require('./mysql');

exports.isExist = function *(){
    console.log(this.request);
    // var data = {
    //     'ok':'成功'
    // };

    var sql = 'select * from user where username="bod"';
    var data = yield mysql(sql);

    this.response.body = JSON.stringify(data);
    this.response.statusCode = 200;
};

exports.postLogin = function *(){
    console.log(this.request);
    var sql = 'select * from user where username="bod"';
    var data = yield mysql(sql);
    console.log(data)
    this.response.statusCode = 200;    
};
