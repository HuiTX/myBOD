'use strict';

const util = require('util');
const db = require('../middleware/db');

const CustomerDAO = function () {};

// find by id
CustomerDAO.prototype.findByID = function (id, cb) {
  var sql = 'SELECT * FROM customer AS u WHERE u.id = ?';

  db.query({
    sql: sql,
    values: [id],
    callback: cb
  });
};

// multiple id
CustomerDAO.prototype.multipleID = function (ids, cb) {
  var sql = 'SELECT * FROM customer WHERE userId in(';

  try{
    var tempID = '';
    for(var id=0;id<ids.length;id++){
      tempID += ',?'
    }

    sql += tempID.replace(/\,/, '') + ')';
    console.log(sql);
    db.query({
      sql: sql,
      values: ids,
      callback: cb
    });

  }catch(e){
    throw e;
  }
};

// find list
CustomerDAO.prototype.find = function (params, unlimit, cb) {
  // var sql = 'SELECT * FROM user LIMIT ?,?';
  var sql = 'SELECT * FROM customer ';
  var values = [];

  for(var param in params){
    if(param != 'offset' && param != 'rows'){
        if(!/WHERE/g.test(sql)){
            sql += 'WHERE ';
        }

        values.push(params[param]);
        sql += param + '=? '
    }
  };

  if(!unlimit){
    values = values.concat([params.offset, params.rows]);
    sql += 'LIMIT ?,?';
  }
console.log(sql);
  db.query({
    sql: sql,
    values: values,
    callback: cb
  });
};

CustomerDAO.prototype.insert = function(params, cb) {
  // var values = [];
  // var col = '';
  // var val = '';

  // for (var keyname in params) {
  //   console.log(keyname);
  //   col += ',' + keyname;
  //   val += ', ?';
  //   values.push(params[keyname]);
  // }

  // col = col.replace(/^\,/, '');
  // val = val.replace(/^\,/, '');

  // var sql = util.format('insert into customer (%s) values (%s)', col, val);
  var sql = 'insert into customer set ?';

  db.query({
    sql : sql,
    values: params,
    callback : cb
  });
};

CustomerDAO.prototype.update = function(params, cb, driver) {
  // var values = [
  //   // params.username,
  //   // params.password
  // ];
  // var set = '';

  // for (var keyname in params) {
  //   if(keyname != 'id'){
  //     set += ',' + keyname + '=?';
  //     values.push(params[keyname]);
  //   }
  // }
  // values.push(params['id']);

  // set = set.replace(/^\,/, '');

  // var sql = util.format('update customer set %s where id=?', set);
  // console.log(sql);
  var values = [];
  var customerId = {id:params['id']};
  delete params['id'];
  values.push(params,customerId);

  var sql = 'update customer set ? where ?';

  var options = {
    sql : sql,
    values: values,
    callback : cb
  };

  if (driver) { driver(options); } else { db.query(options); }
};

CustomerDAO.prototype.joinDict = function(params, cb) {
    let key = [];
    //let values = [];

    for(let param in params){
        if(param != 'customer_id'){
            key.push(param);
        }
    }
    console.log(params);
    // let sql = 'SELECT d.id id,'
    //         + 'd.name name,'
    //         + 'dir.id director_id,'
    //         + 'dir.name director_name,'
    //         + 'dir.phone director_phone,'
    //         + 'dir.%s director_%s '
    //         + 'FROM dict AS d,'
    //         + 'director AS dir '
    //         + 'WHERE dir.customer_id = ?';

    let sql = 'SELECT d.name dict_name,'
            + 'd.value dict_value,'
            + 'd.dict dict,'
            + 'c.id id,'
            + 'c.name name,'
            + 'c.phone phone,'
            + 'c.keyBusiness keyBusiness '
            + 'FROM dict AS d,'
            + 'customer AS c '
            + 'WHERE c.id = ? '
            + '%s';

    if(key.length){
        let w = 'AND (';

        for(let i in key){
            if(i==0){
                w += util.format('c.%s = d.id ', key[i]);
            }else{
                w += util.format('OR c.%s = d.id ', key[i]);  
            }            
        }

        w += ')';
        sql = util.format(sql, w);
    }else{
        sql = util.format(sql, '');
    }
    console.log(sql);
    db.query({
      sql : sql,
      values: [params.customer_id],
      callback : cb
    });
};

const customerDAO = new CustomerDAO();
module.exports = customerDAO;
