'use strict';

const Q = require('q');
const _ = require('lodash');
const ReplyHelper = require('../util/reply-helper');
const Async = require('async');
const customerDAO = require('../dao/customerDAO');
const userDAO = require('../dao/userDAO');
const Store = require('../util/store');

// define
const CustomerController = function() {};

// find custom list
CustomerController.prototype.find = function(request, reply, unlimit) {
    var helper = new ReplyHelper(request, reply);

    var params = request.query;
    var _unlimit = unlimit || false; //1:true, 2:false

    // pager params
    var index = Number(params.index) || 1;
    var size = Number(params.size) || 10;

    params['offset'] = size * (index - 1);
    params['rows'] = size;

    customerDAO.find(params, _unlimit, function(err, data) {
        helper.find(err, data);
    });
};

// findAll
CustomerController.prototype.findAll = function(request, reply) {
    CustomerController.prototype.find.call(this, request, reply, true);
};

// find custom list
CustomerController.prototype.getBySelf = function(request, reply, unlimit) {
    var helper = new ReplyHelper(request, reply);
    var User = Store.get();
    var params = {};
    var _unlimit = unlimit || false; //1:true, 2:false

    // pager params
    var index = Number(params.index) || 1;
    var size = Number(params.size) || 10;

    params['offset'] = size * (index - 1);
    params['rows'] = size;
    params['userId'] = User.user.id;

    customerDAO.find(params, _unlimit, function(err, data) {
        console.log(data);
        helper.find(err, data);
    });
};

// find user by id
CustomerController.prototype.findByID = function(request, reply) {
    var helper = new ReplyHelper(request, reply);
    var params = request.params;

    customerDAO.findByID(params.id, function(err, data) {
        helper.findOne(err, data);
    });
};

// insert
CustomerController.prototype.insert = function(request, reply) {
    var helper = new ReplyHelper(request, reply);
    var params = request.payload;
    var User = Store.get();

    params['userId'] = User.user.id;

    var insert = Q.denodeify(customerDAO.insert);

    insert(params)
        .then(function(data) {
            helper.insert(null, {
                id: data.insertId
            });
        })
        .catch(function(err) {
            helper.insert(err);
        });
};

// update
CustomerController.prototype.update = function(request, reply) {
    var helper = new ReplyHelper(request, reply);
    var params = request.payload;
    var id = params.id;

    var update = Q.denodeify(customerDAO.update);

    update(params)
        .then(function(data) {
            helper.update(null, {
                id: id
            });
        })
        .catch(function(err) {
            helper.update(err);
        });
};

// find user list
CustomerController.prototype.findChildren = function(request, reply) {
    var helper = new ReplyHelper(request, reply);
    //var User = Store.get();
    var params = request.query;
    var Path = request.query.path || User.path;

    // pager params
    var index = Number(params.index) || 1;
    var size = Number(params.size) || 10;

    delete params.index;
    delete params.size;

    params['offset'] = size * (index - 1);
    params['rows'] = size;
    params['path'] = Path;

    for (var param in params) {
        if (param == 'path') {
            var value = params[param];
            params[param] = '%' + value + '%';
        }
    };

    userDAO.like(params, false, function(err, data) {
        if (err) throw err;

        !data.length && helper.find(err, data);

        for (var i = 0, _params = {}, _user = []; i < data.length; i++) {
            if (data[i].path == Path) {
                _params['userId'] = data[i]['id'];

            } else {
                _user.push({
                    id: data[i]['id'],
                    name: data[i]['name'],
                    phone: data[i]['phone'],
                    sex: data[i]['sex']
                });
            }
        };

        _params['offset'] = size * (index - 1);
        _params['rows'] = size;

        customerDAO.find(_params, false, function(_err, _data) {
            if (_err) throw _err;

            reply({
                'items': _data,
                'user': _user
            }).type('application/json');
        });

    });
};

// join dict
CustomerController.prototype.joinDict = function(request, reply) {
    var helper = new ReplyHelper(request, reply);
    var params = request.query;

    Async.waterfall([
            // find customer
            function(callback){
                customerDAO.joinDict(params, function(err, data) {
                    callback(err, data);
                });
            }
        ], function(err, result){
            var temp = {};

            for(var i=0;i<result.length;i++){
                var dict = result[i].dict;
                result[i][dict+'_value'] = result[i]['dict_value'];
                result[i][dict+'_name'] = result[i]['dict_name'];
                delete result[i].dict_name && delete result[i].dict_value && delete result[i].dict;

                i==0 ? temp = result[i] : _.extend(temp, result[i]);
            };

            helper.find(err, temp);
    });
}

const customerController = new CustomerController();
module.exports = customerController;
