'use strict';

const Q = require('q');
const ReplyHelper = require('../util/reply-helper');
const userDAO = require('../dao/userDAO');
const Store = require('../util/store');
const jwt = require('jsonwebtoken');

// define
const UserController = function() {};

// find user list
UserController.prototype.find = function(request, reply) {
    var helper = new ReplyHelper(request, reply);
    var params = request.query;

    // pager params
    var index = Number(params.index) || 1;
    var size = Number(params.size) || 10;

    params['offset'] = size * (index - 1);
    params['rows'] = size;

    userDAO.find(params, true, function(err, data) {
        helper.find(err, data);
    });
};

// find user by id
UserController.prototype.findByID = function(request, reply) {
    var helper = new ReplyHelper(request, reply);
    var params = request.params;

    userDAO.findByID(params.id, function(err, data) {
        helper.findOne(err, data);
    });
};

UserController.prototype.insert = function(request, reply) {
    var helper = new ReplyHelper(request, reply);
    var params = request.payload;

    var findByID = Q.denodeify(userDAO.findByID);
    var insert = Q.denodeify(userDAO.insert);
    var update = Q.denodeify(userDAO.update);

    findByID(params.parentId)
        .then(function(data) {
            insert(params)
                .then(function(_data) {
                    let path = data[0].path + _data.insertId + '-';
                    let _params = {
                        id: _data.insertId,
                        path: path
                    };
                    console.log(_params);
                    update(_params).then(function(_data_) {
                        helper.insert(null, _data_);
                    });
                });
        })
        .catch(function(err) {
            helper.insert(err);
        });
};

// UserController.prototype.update = function(request, reply) {
//     var helper = new ReplyHelper(request, reply);
//     var params = request.payload;

//     var insert = Q.denodeify(userDAO.insert);

//     update(params)
//         .then(function(data) {
//             helper.insert(null, data);
//         })
//         .catch(function(err) {
//             helper.insert(err);
//         });
// };

const userController = new UserController();
module.exports = userController;
