var request = require('co-request');
var mysql = require('./mysql');

exports.isExist = function *(){
    var opt = {
        url: 'http://127.0.0.1:99/isExist',
        encoding: null
    }
    this.res.statusCode = 200;
};

exports.testSql = function *(){
    var sql = 'select * from user';
    //var data = yield mysql(sql);
    //console.log(data);
    mysql(sql, function(err, res){
        //console.log(res);
    });
};