var request = require('koa-request');
var _ = require('lodash');

// self function is a proxy to access other APIs
// You define the prefix (in the app.use()) and the target,
// it will match the routes for you and proxy the result back..
module.exports.proxy = function *(prefix, target, self, mustContain) { // Only for GET method
    if (_.startsWith(self.url, prefix)) {
        var CACHETIME = 180; // Set caching to minimise traffic to target
        var TIMEOUT = 5000;  // Set target connections to timeout after self many ms

        var url = target || self.url.substr(prefix.length);

        // If we have no target, then we expect the target to be supplied, URI encoded
        if ((typeof target !== 'string') || (target === '')){
            url = decodeURIComponent(url);
            url = url.replace(/^\/*/,''); // Strip leading slashes
            target = '';
        }

        // We need to check if there is a mustContain and that we match it if it exists
        if ((typeof mustContain === 'string') && (!_.isEmpty(mustContain)) ) {
            if (url.search(mustContain) === -1) {
                self.body = {
                    status: 'error',
                    message: "Invalid URI supplied: '" +
                             url +
                             "' - missing '" +
                             mustContain + "'",
                    statusCode: 400
                };
                self.status = 400;
                return;
            }
        }

        var proxyRequest = {
            url: url,
            headers: self.hearders,
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
        
        self.body = {
            data: JSON.parse(result.body),
            // data: {
            //     ok:'成功'
            // },
            status: 'ok',
            statusCode: self.status
        };

        self.response.set('Cache-Control','public, max-age=' + CACHETIME);
        self.response.set('Expires', (new Date((Math.floor(new Date().getTime() / 1000) + CACHETIME) * 1000)).toUTCString() );
        return;
    }
    yield next;
};