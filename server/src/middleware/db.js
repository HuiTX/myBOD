"use strict";

var mysql = require('mysql');
var _ = require('lodash');
var constants = require('../config/constants');

module.exports = function() {

  var internals = {};
  var externals = {};

  var options = {
    multipleStatements: true,
    supportBigNumbers: true
  };
  _.extend(options, constants.database);

  var pool  = mysql.createPool(options);
  internals.pool = pool;

  internals.connect = function(connectHandler) {
    pool.getConnection(function(err, connection) {
      if (err) return connectHandler(err, null);
      return connectHandler(null, connection);
    });
  };

  externals.query = function(params) {
    var sql = params.sql;
    var values = params.values;
    var queryHandler = params.callback;
    internals.connect(function(err, connection) {
      if (err) return queryHandler(err, null);
      connection.query(sql, values, function(err, rows, fields) {
        queryHandler(err, rows);
        connection.release();
      });
    });
  };

  externals.transaction = function(arr, callback) {
    var args = [];
    internals.connect(function(err, connection) {
      if (err)  { return callback(err, null); }

      // exec query
      var execQuery = function (conn) {
        var func = arr.shift();

        if (func) {
          var run = function (params) {
            var sql = params.sql;
            var values = params.values;
            var queryHandler = params.callback;
            conn.query(sql, values, queryHandler);
          };
          var cb = function (err) {
            if (err) { return callback(err, null); }
            args = Array.prototype.slice.call(arguments);
            args.shift();
            execQuery(conn);
          };
          func.apply(null, args.concat([run, cb]));
        } else {
          conn.commit(function(err) {
            if (err) {
              return conn.rollback(function() {
                // throw err;
                callback(err, null);
              });
            }
          });
          args.unshift(null);
          callback.apply(null, args);
        }
      };

      connection.beginTransaction(function(err) {
        if (err)  { return callback(err, null); }

        execQuery(connection);
      });

    });
  };

  return externals;
}();
