'use strict';

const util = require('util');
const co = require('co');
const request = require('co-request');
// const boom = require('boom');
const cookieName = 'bodClient';

// proxy middleware
const middleware = function* (next) {
  var ctx = this;
  if (ctx.path.search(/^\/api\//i) === -1) { // uri not start with /api
    yield next;
  } else { // do proxy
    yield proxy(ctx);
  }
};


const proxy = function* (ctx, uri) {
  let noResponse = ctx._noResponse || false;

  if (ctx.request.headers['content-type']  // file upload
    && ctx.request.headers['content-type'].search(/multipart\//i) !== -1) {
    console.log('file upload')
  } else {
    // normal request
    var uri = uri || ctx.url.replace(/^\/api/i, '');
    var prefix = process.env.Server || 'http://192.168.70.184:9001';
    var url = util.format('%s/%s', prefix.replace(/\/$/i, ''), uri.replace(/^\//i, ''));
    var method = ctx.method.toUpperCase();

    // request options
    var headers = ctx.request.headers;
    delete headers['accept-encoding']; // remvoe accept-encoding
    var options = {
      url: url,
      method: method,
      headers: headers
    };
    // add token
    var token = ctx.cookies.get(cookieName);
    if (token) {
      options.headers['token'] = token;
    }

    // load body data
    if (method === 'POST' || method === 'PUT' || method === 'PATCH') {
      var body = ctx.request.body;
      if (body instanceof Object) {
        options.json = true;
      }
      options.body = body;
    }

    // start request
    try {
      let response = yield request(options);

      if (!noResponse) {
        let body = response.body;
        if (uri.toLowerCase() === '/login'
          && (response.statusCode >= 200 && response.statusCode < 300)) {
          let cookieValue = tryParseJSON(body).token;
          let expires = new Date();

          expires.setDate(expires.getDate() + 1);
          ctx.cookies.set(cookieName, cookieValue, {
            'expires': expires
          });
          body = null;
        }

        for (var key in response.headers) {
          ctx.response.set(key, response.headers[key]);
        }
        ctx.response.status = response.statusCode;
        ctx.body = body;
      } else {
        return response.body;
      }

    } catch(err) {
      ctx.throw(500, err);
    }

  }

};

module.exports = exports = middleware;
exports.run = function* (ctx, uri) {
  ctx._noResponse = true;
  return yield proxy(ctx, uri);
};


function tryParseJSON (data) {
  if (typeof data === 'string') {
    try {
      return JSON.parse(data);
    }
    catch (ex) {
      return {};
    }
  } else {
    return data;
  }
}
