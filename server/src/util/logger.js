'use strict';

// require chalk
const util = require('util');
const chalk = require('chalk');

// define color
const color = {
  error: chalk.bold.red,
  warm: chalk.bold.yellow,
  normal: chalk.cyan
};
// prefix
const prefix = 'BOD-Server';


// logger func
function logger (msg, type) {
  var head = util.format('[%s]', color.normal(prefix));

  if (type === 'error') {
    head = util.format('%s [%s]', head, color.error('ERROR'));
  } else if (type === 'warn') {
    head = util.format('%s [%s]', head, color.warn('WARN'));
  }

  var content = util.format('%s %s', head, msg);

  console.log(content);
}

// export color
exports.color = color;

// error
exports.error = function (msg) {
  logger(msg, 'error');
};

// warn
exports.warm = function (msg) {
  logger(msg, 'warm');
};

// normal
module.exports = exports = function (msg) {
  logger(msg);
};
