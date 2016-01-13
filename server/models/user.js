var request = require('co-request');
var mysql = require('./mysql');

exports.isExist = function *(){
    // var data = {
    //     statusCode:200,
    //     body:{
    //         'ok':'成功'
    //     }
    // }

    // this.res = yeild data;
    this.res.body = 'dasdasdasdasdsad'
    this.res.statusCode = 200;

};

exports.testSql = function *(){
    var sql = 'select * from user where username="bod"';
    var data = yield mysql(sql);
    console.log(data)
    this.res.statusCode = 200;
    this.res.body = {
        'data':'success'
    };
};

// exports.insertSql = function *(){
//     var name = 'bod';
//     var password = '123';

//     var sql = 'insert into user(id, username, password) values('
//              + null + ',"'
//              + name + '","'
//              + password
//              +'")';
//     //var data = yield mysql(sql);
//     //console.log(data);
//     yield mysql(sql, function(err, res){
//         //console.log(res);
//     });
//     console.log(111111111111111111);
// };