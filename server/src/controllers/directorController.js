'use strict';

const Q = require('q');
const ReplyHelper = require('../util/reply-helper');
const directorDAO = require('../dao/directorDAO');
const Store = require('../util/store');
const Async = require('async');
const Boom = require('boom');
const _ = require('lodash');

// define
const DirectorController = function() {};

// find director by id
DirectorController.prototype.findByID = function(request, reply) {
    var helper = new ReplyHelper(request, reply);
    var params = request.params;

    directorDAO.findByID(params.id, function(err, data) {
        helper.findOne(err, data);
    });
};

// find director
DirectorController.prototype.findByCustomer = function(request, reply, unlimit) {
    var helper = new ReplyHelper(request, reply);
    var params = request.query;
    //var _query = request.query;
    var _unlimit = unlimit || false; //1:true, 2:false

    // pager params
    var index = Number(params.index) || 1;
    var size = Number(params.size) || 10;

    delete params.index && delete params.size;

    params['customer_id'] = params.customer_id;
    params['offset'] = size * (index - 1);
    params['rows'] = size;

    Async.waterfall([
            // find director
            function(callback){
                directorDAO.innerJoinDict(params, _unlimit, function(err, data) {
                    console.log(data);
                    callback(err, data);
                });
            }
        ], function(err, result){
            helper.find(err, result);
    });
};

// insert director
DirectorController.prototype.insert = function(request, reply) {
    var helper = new ReplyHelper(request, reply);
    var params = request.payload;
    var User = Store.get();
    //params['userId'] = User.id;
    // 暂时用这个
    //params['customerId'] = 1;

    var insert = Q.denodeify(directorDAO.insert);

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

// update director
DirectorController.prototype.update = function(request, reply) {
    var helper = new ReplyHelper(request, reply);
    var params = request.payload;
    var id = params.id;

    var update = Q.denodeify(directorDAO.update);

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

const directorController = new DirectorController();
module.exports = directorController;
