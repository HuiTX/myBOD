'use strict';

var request = require('koa-request');
var _ = require('lodash');

// self function is a proxy to access other APIs
// You define the prefix (in the app.use()) and the target,
// it will match the routes for you and proxy the result back..
module.exports.proxy = function *(self, target, mustContain) { // Only for GET method
    var self = self || null;
    var prefix = 'http://127.0.0.1:100';
    var target = target || self.url;
    var url = '';

    try{
        prefix = process.env.proxy.host + process.env.proxy.port;
    }catch(e){}

    if (!_.isEmpty(self)) {
        var CACHETIME = 180; // Set caching to minimise traffic to target
        var TIMEOUT = 5000;  // Set target connections to timeout after self many ms

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
console.log(url);
        // If we have no target, then we expect the target to be supplied, URI encoded
        // if ((typeof target !== 'string') || (target === '')){
        //     url = decodeURIComponent(url);
        //     url = url.replace(/^\/*/,''); // Strip leading slashes
        //     target = '';
        // }

        var proxyRequest = {
            url: url,
            headers: {'User-Agent': 'proxy'},
            encoding: null,
            timeout: TIMEOUT
        };
console.log(url);
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
console.log('bbbbb');
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

        var sBody = result.body.toString('utf8');
        self.body = {
            data: JSON.parse(sBody),
            status: 'ok',
            statusCode: self.status
        };
        console.log(self.body);
        self.response.set('Cache-Control','public, max-age=' + CACHETIME);
        self.response.set('Expires', (new Date((Math.floor(new Date().getTime() / 1000) + CACHETIME) * 1000)).toUTCString() );
        return;
    }
    yield next;
};