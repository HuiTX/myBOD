'use strict';
const fs = require('fs');

// find user list
exports.uploadImg = function (request, reply) {
    let _files = new Buffer(request.headers.files, 'base64');
	let path = process.cwd() + '/upload/' + request.headers.filesname;

    fs.writeFile(path, _files, function (err) {
        if (err) throw err;
        console.log('It\'s saved!');
    });

};

