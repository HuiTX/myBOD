'use strict';

// require module
const Hapi = require('hapi');
const Basic = require('hapi-auth-basic');
const Store = require('./src/util/store');
const Boom = require('boom');
const util = require('util');
const _ = require('lodash');
const chalk = require('chalk');
const logger = require('./src/util/logger');
const constants = require('./src/config/constants.js');
const routes = require('./src/routes');
const host = constants.application['host'];
const port = constants.application['port'];
const db = constants.database;

// create server
const server = new Hapi.Server();
server.connection({
  port: port
});

// add plugin
server.ext('onRequest', function(request, reply){
  if(/login/g.test(request.url.pathname)){
     return reply.continue();
  }

  validateToken(request, reply);
});

const validateToken = function (request, reply) {
  let token = request.headers['token'];
  let value = Store.get(token);

  if (!value) {
      //request.headers['__user'] = {id: 1};
      return reply('').code(401);
  } else {
    Store.token(token, 'user', function(err, data){
      // if(err)return reply(Boom.unauthorized('')).code(401);
      delete data.user.password;
      request.headers['__user'] = data.user;

      return reply.continue();
    });
  }
};

// write logger to console for each request
server.ext('onPreResponse', function(request, reply){
  var statusCode = request.response.statusCode || request.response.output.statusCode || '-';

  if (statusCode >= 200 && statusCode < 300) {
    statusCode = chalk.green(statusCode);
  } else {
    statusCode = chalk.red(statusCode);
  }

  logger(util.format('%s %s %s',
                      request.method.toLocaleUpperCase(),
                      request.path,
                      statusCode));
  return reply.continue();
});

// register routes
for (var route in routes) {
    server.route(routes[route]);
}

// server.register(Basic, (err) => {
//     server.auth.strategy('token', 'basic', { validateFunc: validate });

//     for (var route in routes) {
//       server.route(routes[route]);
//     }
// });

// start server
server.start(() => {
  // server info
  logger(util.format('Server running at: %s', chalk.yellow(server.info.uri)));

  // db info
  logger(util.format('DB info: host[%s] user[%s] password[%s] database[%s]',
    chalk.green(db.host),
    chalk.green(db.user),
    chalk.green(db.password),
    chalk.green(db.database)));
});
