'use strict';

const util = require('util');
const db = require('../middleware/db');

const UserDAO = function() {};

// find by id
UserDAO.prototype.findByID = function(id, cb) {
    var sql = 'SELECT * FROM user AS u WHERE u.id = ?';

    db.query({
        sql: sql,
        values: [id],
        callback: cb
    });
};

// find list
UserDAO.prototype.find = function(params, limit, cb) {
    // var sql = 'SELECT * FROM user LIMIT ?,?';
    var sql = 'SELECT * FROM user ';
    var values = [];

    for (var param in params) {
        if (param != 'offset' && param != 'rows') {
            if (!/WHERE/g.test(sql)) {
                sql += 'WHERE ';
            }

            values.push(params[param]);
            sql += param + '=?,'
        }
    };

    sql = sql.replace(/\,$/ig, '');

    if (limit) {
        values = values.concat([params.offset, params.rows]);
        sql += ' LIMIT ?,?';
    }

    db.query({
        sql: sql,
        values: values,
        callback: cb
    });
};

// find list
UserDAO.prototype.like = function(params, limit, cb) {
    // var sql = 'SELECT * FROM user LIMIT ?,?';
    var sql = 'SELECT * FROM user ';
    var values = [];

    for (var param in params) {
        if (param != 'offset' && param != 'rows') {
            if (!/WHERE/g.test(sql)) {
                sql += 'WHERE ';
            }

            values.push(params[param]);
            sql += param + ' LIKE ?,'
        }
    };

    sql = sql.replace(/\,$/ig, '');

    if (limit) {
        values = values.concat([params.offset, params.rows]);
        limit ? sql += ' LIMIT ?,?' : sql += '';
    }

    db.query({
        sql: sql,
        values: values,
        callback: cb
    });
};

UserDAO.prototype.insert = function(params, cb) {
    var values = [];
    var col = '';
    var val = '';

    for (var keyname in params) {
        col += ',' + keyname;
        val += ', ?';
        values.push(params[keyname]);
    }

    col = col.replace(/^\,/, '');
    val = val.replace(/^\,/, '');

    var sql = util.format('insert into user (%s) values (%s)', col, val);

    db.query({
        sql: sql,
        values: values,
        callback: cb
    });
};

UserDAO.prototype.update = function(params, cb) {
    var values = [];
    var set = '';

    for (var keyname in params) {
        if (keyname != 'id') {
            set += ',' + keyname + '=?';
            values.push(params[keyname]);
        }
    }
    values.push(params['id']);

    set = set.replace(/^\,/, '');

    var sql = util.format('update user set %s where id=?', set);
    console.log(sql);

    db.query({
        sql: sql,
        values: values,
        callback: cb
    });
};

const userDAO = new UserDAO();
module.exports = userDAO;
