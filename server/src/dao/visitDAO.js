'use strict';

const util = require('util');
const uuid = require('uuid');
const db = require('../middleware/db');

const VisitDAO = function () {};

const select_sentence = '\
  SELECT v.id id, \
         v.date date, \
         v.state state, \
         u.id user_id, u.name user, \
         c.id customer_id, c.name customer, \
         d.id director_id, d.name director, \
         v.way way, \
         c.stage stage, \
         d.relation relation, \
         v.cost cost, \
         v.promise promise, \
         v.next next, \
         v.result result, \
         v.partner partner \
  FROM visit AS v \
  JOIN director AS d on v.director_id = d.id \
  JOIN user AS u on v.user_id = u.id \
  JOIN customer AS c on d.customer_id = c.id \
  WHERE ?';

// find
VisitDAO.prototype.findByCondition = function (params, cb, driver) {
  var cond = {};
  if (params.id) cond['v.id'] = params.id;
  if (!params.director_id && params.customer_id) cond['c.id'] = params.customer_id;
  if (params.director_id) cond['d.id'] = params.director_id;
  var values = [cond];

  var sql = select_sentence;

  var options = {
    sql : sql,
    values: values,
    callback : cb
  };

  if (driver) { driver(options); } else { db.query(options); }
};

// findBySelf
VisitDAO.prototype.findByUser = function (params, cb, driver) {
  var values = [{
    'u.id': params.id
  }];
  var sql = select_sentence;

  var options = {
    sql : sql,
    values: values,
    callback : cb
  };

  if (driver) { driver(options); } else { db.query(options); }
};

// findPurposeByCondition
VisitDAO.prototype.findPurposeByCondition = function (params, cb, driver) {
  var values = [params];
  var sql = 'SELECT * FROM visit_purpose WHERE ?';

  var options = {
    sql : sql,
    values: values,
    callback : cb
  };

  if (driver) { driver(options); } else { db.query(options); }
};

VisitDAO.prototype.insert = function (params, callback, driver) {
  var values = params;

  var sql = util.format('INSERT INTO visit SET ?');

  var opt = {
    sql: sql,
    values: values,
    callback: callback
  };

  if (driver) {
    driver(opt);
  } else {
    db.query(opt);
  }
};

VisitDAO.prototype.update = function (id, params, callback, driver) {
  var values = [params, {
    id: id
  }];

  var sql = util.format('UPDATE visit SET ? WHERE ?');

  var opt = {
    sql: sql,
    values: values,
    callback: callback
  };

  if (driver) {
    driver(opt);
  } else {
    db.query(opt);
  }
};

VisitDAO.prototype.insertPurpose = function (params, callback, driver) {
  var values = [params];

  var sql = util.format('INSERT INTO visit_purpose (visit_id, purpose_id) VALUES ?');

  var opt = {
    sql: sql,
    values: values,
    callback: callback
  };

  if (driver) {
    driver(opt);
  } else {
    db.query(opt);
  }
};

const visitDAO = new VisitDAO();
module.exports = visitDAO;
