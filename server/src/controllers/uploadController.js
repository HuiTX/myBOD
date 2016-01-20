'use strict';
const fs = require('fs');

// find user list
exports.uploadImg = function (request, reply) {
    console.log(request.headers.files);
    console.log(typeof request.headers.files);
    // var filestreams = this.request.header.files.toString('utf8');
    // filestreams = JSON.parse(filestreams)

    var path = process.cwd() + '/upload' + '/test01.jpg';

    fs.writeFile(path, request.headers.files, function (err) {
        if (err) throw err;
        console.log('It\'s saved!');
    });

};

