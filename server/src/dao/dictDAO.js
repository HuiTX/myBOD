'use strict';

const util = require('util');
const uuid = require('uuid');
const db = require('../middleware/db');

const DictDAO = function () {};

// find by dict
DictDAO.prototype.findByDict = function (dict, cb) {
  var isMulti = false; // 是否多字典
  var where = '';
  if (dict instanceof Array) {
    isMulti = true;
    for (let i in dict) {
      where += ' OR d.dict = ?';
    }
    where = where.replace(/^\sOR/, '');
  } else if (dict instanceof String) {
    where = ' d.dict = ?';
  }

  var sql = util.format('SELECT * FROM dict AS d WHERE%s', where);

  db.query({
    sql: sql,
    values: isMulti ? dict : [dict],
    callback: cb
  });
};

DictDAO.prototype.insert = function (params, cb) {
  var values = params;

  var sql = util.format('insert into dict SET ?');

  db.query({
    sql: sql,
    values: values,
    callback: cb
  });
};

const dictDAO = new DictDAO();
module.exports = dictDAO;
