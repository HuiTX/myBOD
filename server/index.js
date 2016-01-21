'use strict';

// require module
const Hapi = require('hapi');
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
  port: port,
  host: host
});

// add plugin
// server.ext('onRequest', function(request, reply){
//   // request.plugins.createControllerParams = function(requestParams){
//   //   console.log(123);
//   //   // var params = _.clone(requestParams);
//   //   // params.userId = request.auth.credentials.userId;
//   //   // return params;
//   //   return requestParams;
//   // };
//   return reply.continue();
// });

// write logger to console for each request
server.ext('onPreResponse', function(request, reply){
  var statusCode = request.response.statusCode || request.response.output.statusCode || '-';

  if (statusCode === 200) {
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
console.log(routes);
// register routes
for (var route in routes) {
  server.route(routes[route]);
}


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

