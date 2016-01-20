'use strict';

var request = require('co-request');
var fs = require('fs');
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

exports.customUpload = function *(){
    console.log(1111111111);
    console.log(this.request.header.files);
    var filestreams = this.request.header.files.toString('utf8');
    filestreams = JSON.parse(filestreams)

    var path = process.cwd() + '/upload' + '/test01.jpg';

    fs.writeFile(path, filestreams._readableState.buffer, 'utf-8', function (err) {
        if (err) throw err;
        console.log('It\'s saved!');
    });
    //console.log(filestreams);
    // var data = {
    //     'ok':'成功'
    // };

    // var sql = 'select * from user where username="bod"';
    // var data = yield mysql(sql);

    // this.response.body = JSON.stringify(data);
    // this.response.statusCode = 200;
};