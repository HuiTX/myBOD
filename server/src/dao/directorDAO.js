'use strict';

const util = require('util');
const _ = require('lodash');
const db = require('../middleware/db');

const DirectorDAO = function () {};

// find by id
DirectorDAO.prototype.findByID = function (id, cb) {
  var sql = 'SELECT * FROM director AS u WHERE u.id = ?';

  db.query({
    sql: sql,
    values: [id],
    callback: cb
  });
};

// find list
DirectorDAO.prototype.find = function (params, unlimit, cb) {
  // var sql = 'SELECT * FROM user LIMIT ?,?';
  var sql = 'SELECT * FROM director ';
  var values = [];

  for(var param in params){
    if(param != 'offset' && param != 'rows'){
        if(!/WHERE/g.test(sql)){
            sql += 'WHERE ';
        }

        values.push(params[param]);
        sql += param + '=?,'
    }
  };

  sql = sql.replace(/\,$/ig, '');

  if(!unlimit){
    values = values.concat([params.offset, params.rows]);
    sql += ' LIMIT ?,?';
  }

  db.query({
    sql: sql,
    values: values,
    callback: cb
  });
};

DirectorDAO.prototype.insert = function(params, cb) {
  var values = [];
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

  var sql = util.format('insert into director (%s) values (%s)', col, val);

  db.query({
    sql : sql,
    values: values,
    callback : cb
  });
};

DirectorDAO.prototype.update = function(params, cb, driver) {
  // var values = [];
  // var set = '';

  // for (var keyname in params) {
  //   if(keyname != 'id'){
  //     set += ',' + keyname + '=?';
  //     values.push(params[keyname]);
  //   }
  // }
  // values.push(params['id']);

  // set = set.replace(/^\,/, '');

  var values = [];
  var cond = {
    id: params['id']
  };
  delete params['id'];
  values.push(params, cond);

  var sql = 'update director set ? where ?';

  var options = {
    sql : sql,
    values: values,
    callback : cb
  };

  if (driver) { driver(options); } else { db.query(options); }
};

DirectorDAO.prototype.innerJoinDict = function(params, unlimit, cb) {
  // var sql = 'select * from dict inner director on dict.relation=?';
  let key = '';
  let value = '';
  let values = [];

  for(let param in params){
      if(param != 'offset' && param != 'rows' && param != 'customer_id'){
          key = param;
          value = params[param];
      }
  }

  values = [params.customer_id];

  let sql = 'SELECT d.id id,'
          + 'd.name name,'
          + 'dir.id director_id,'
          + 'dir.name director_name,'
          + 'dir.phone director_phone,'
          + 'dir.%s director_%s '
          + 'FROM dict AS d,'
          + 'director AS dir '
          + 'WHERE dir.customer_id = ?';

  if(key){
     sql += ' AND d.id = dir.%s';
  }

  if(!unlimit){
      values = values.concat([params.offset, params.rows]);
      sql += ' LIMIT ?,?';
  }

  sql = util.format(sql, key, key, key);

  db.query({
    sql : sql,
    values: values,
    callback : cb
  });
};

const directorDAO = new DirectorDAO();
module.exports = directorDAO;
