'use strict';

const util = require('util');
const db = require('../middleware/db');

const CustomDAO = function () {};

// find by id
CustomDAO.prototype.findByID = function (id, cb) {
  var sql = 'SELECT * FROM custom AS u WHERE u.id = ?';

  db.query({
    sql: sql,
    values: [id],
    callback: cb
  });
};

// find list
CustomDAO.prototype.find = function (params, cb) {
  var sql = 'SELECT * FROM custom LIMIT ?,?';

  db.query({
    sql: sql,
    values: [params.offset, params.rows],
    callback: cb
  });
};

CustomDAO.prototype.insert = function(params, cb) {
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

const customDAO = new CustomDAO();
module.exports = customDAO;
