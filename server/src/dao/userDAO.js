'use strict';

const util = require('util');
const db = require('../middleware/db');

// find by id
exports.findByID = function (id, cb) {
  var sql = 'SELECT * FROM user AS u WHERE u.id = ?';

  db.query({
    sql: sql,
    values: [id],
    callback: cb
  });
};

// find list
exports.find = function (params, cb) {
  var sql = 'SELECT * FROM user LIMIT ?,?';

  db.query({
    sql: sql,
    values: [params.offset, params.rows],
    callback: cb
  });
};
