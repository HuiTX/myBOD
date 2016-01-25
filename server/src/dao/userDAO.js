'use strict';

const util = require('util');
const db = require('../middleware/db');

const UserDAO = function () {};

// find by id
UserDAO.prototype.findByID = function (id, cb) {
  var sql = 'SELECT * FROM user AS u WHERE u.id = ?';

  db.query({
    sql: sql,
    values: [id],
    callback: cb
  });
};

// find by id
UserDAO.prototype.findByParam = function (param, cb) {
  var sql = 'SELECT * FROM user AS u WHERE u.username = ?';

  db.query({
    sql: sql,
    values: [param.username],
    callback: cb
  });
};

// find list
UserDAO.prototype.find = function (params, cb) {
  var sql = 'SELECT * FROM user LIMIT ?,?';

  db.query({
    sql: sql,
    values: [params.offset, params.rows],
    callback: cb
  });
};

UserDAO.prototype.insert = function(params, cb) {
  var values = [
    // params.username,
    // params.password
  ];
  var col = '';
  var val = '';

  for (var keyname in params) {
    console.log(keyname);
    col += ',' + keyname;
    val += ', ?';
    values.push(params[keyname]);
  }

  col = col.replace(/^\,/, '');
  val = val.replace(/^\,/, '');

  var sql = util.format('insert into custom (%s) values (%s)', col, val);

  db.query({
    sql : sql,
    values: values,
    callback : cb
  });
};

const userDAO = new UserDAO();
module.exports = userDAO;
