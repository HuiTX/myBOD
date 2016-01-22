'use strict';

var request = require('koa-request');
var formidable = require('koa-formidable');
var fs = require('co-fs');
var path = require('path');
var httpOrhttps = require('http');
var _ = require('lodash');

// self function is a proxy to access other APIs
// You define the prefix (in the app.use()) and the target,
// it will match the routes for you and proxy the result back..
module.exports.proxy = function *(self, target, mustContain, token) { // Only for GET method
    var self = self || null;
    var prefix = 'http://127.0.0.1:9001';
    var target = target || self.url;
    var url = '';

    try{
        prefix = process.env.proxy.host + process.env.proxy.port;
    }catch(e){}

    if (!_.isEmpty(self)) {
        var CACHETIME = 180; // Set caching to minimise traffic to target
        var TIMEOUT = 5000;  // Set target connections to timeout after self many ms
        var HEADERS = self.request.headers;
        // var request_contentType = self.headers['content-type'] || '';
        //var form = new multiparty.Form();

        // if target is exists
        if(!_.isEmpty(target)){
            let pattern = /^(https|http|ftp):\/\//;

            if(pattern.test(target)){
                url = target;
            }
            else{
                url = prefix + target;
            }
        }

        // We need to check if there is a mustContain and that we match it if it exists
        if (!_.isEmpty(mustContain)) {
            let pattern = /#/;

            if(typeof mustContain !== 'string'){
                mustContain = JSON.stringify(mustContain);
            }
            
            let urlTmp = url.split(pattern)[0];
            if(/\?/.test(urlTmp)){
                url = urlTmp + '&data=' + mustContain;
            }else{
                url = urlTmp + '?data=' + mustContain;
            }

            // check '#' is exists
            if(urlTmp.length > 1){
                for(let i=1;i<urlTmp.length;i++){
                    url = url + '#' + urlTmp[i];
                }
            }
        }

        if (!_.isEmpty(self.request.body)) {
            HEADERS['body'] = self.request.body;
        }

        // If file-type
        try{
            if (HEADERS['content-type'].toLowerCase().indexOf('multipart/') >= 0) {
                var Path = process.cwd() + '/dist/upload/';
                var temp = Path + 'temp/';
                var form = yield formidable.parse({
                    uploadDir : temp,
                    encoding  : 'utf-8'
                },self);

                HEADERS['filesname'] = form.files.file.name;
                HEADERS['filespath'] = form.files.file.path;
                HEADERS['filestemp'] = temp;
                
                var stream = yield fs.createReadStream(form.files.file.path);
                form.files.file && (HEADERS['files'] = stream.toString('base64'));
                //var _file = yield fs.writeFile((Path + form.files.file.name), test);
            }

        }catch(e){}

        var proxyRequest = {
            url: url,
            headers: HEADERS || {'User-Agent': 'proxy'},
            encoding: null,
            timeout: TIMEOUT
        };

        var result;
        try {            
            result = yield request.get(proxyRequest);
        } catch (err) {
            self.status = err.status || 500;
            self.body = {
              status: 'error',
              statusCode: err.status,
              message: err.message
            };
            self.app.emit('error', err, self);
            return;
        }

        if (result.statusCode !== 200) {
            self.status = result.statusCode || 500;
            self.body = {
                status: 'error',
                statusCode: self.status,
                message: JSON.parse(result.body)
            };
            self.app.emit('error', new Error(self.status), self);
            return;
        }

        self.status = 200;
        var contentType = result.headers['content-type'];
        if (contentType) {
            self.response.set('Content-Type', contentType);
        }
        var contentDisposition = result.headers['content-disposition'];
        if (contentDisposition) {
            self.response.set('Content-Disposition', contentDisposition);
        }

        var sBody = result.body.toString('utf-8');
        console.log(sBody);
        self.body = {
            data: JSON.parse(sBody),
            status: 'ok',
            statusCode: self.status
        };

        self.response.set('Cache-Control','public, max-age=' + CACHETIME);
        self.response.set('Expires', (new Date((Math.floor(new Date().getTime() / 1000) + CACHETIME) * 1000)).toUTCString() );
        return;
    }
    yield next;
};
