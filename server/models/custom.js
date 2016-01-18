'use strict';

var request = require('co-request');
var mysql = require('./mysql');

exports.createTable = function *(){
    // var sql = 'show tables like "custom"';
    // var data = yield mysql(sql);
    // console.log('aaaaaaaaaaaaaaa');
    // console.log(data);
    // if(!data.length){
    //     let sql = 'create TEMPORARY table "custom"('
    //               +'"id" INTEGER NOT NULL AUTO_INCREMENT,'
    //               +'"name" NOT NULL varchar(255),'
    //               +'"user" NOT NULL varchar(255),'
    //               +'"major" varchar(255),'
    //               +'"portrait" varchar(255),'
    //               +'"phone" tinyint(12),'
    //               +'"tags" varchar(255),'
    //               +'"keyBusiness" tinyint(10),'
    //               +'"compete" varchar(255))';

    //     let data = yield mysql(sql);
    //     console.log(33333333333333);
    //     console.log(data);
    // }

    // console.log(this.request);

    // var sql = 'select * from user where username="bod"';
    // var data = yield mysql(sql);

    // this.response.body = JSON.stringify(data);
    // this.response.statusCode = 200;
};

exports.customInfo = function *(){
};
