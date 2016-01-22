'use strict';

const Q = require('q');
const ReplyHelper = require('../util/reply-helper');
const userDAO = require('../dao/userDAO');

// define
const UserController = function () {};

// find user list
UserController.prototype.find = function (request, reply) {
  var helper = new ReplyHelper(request, reply);
  var params = request.query;

  // pager params
  var index = Number(params.index) || 1;
  var size = Number(params.size) || 10;

  userDAO.find({
    'offset': size * (index - 1),
    'rows': size
  }, function (err, data) {
    helper.find(err, data);
  });
};

// find user by id
UserController.prototype.findByID = function (request, reply) {
  var helper = new ReplyHelper(request, reply);
  var params = request.params;

  userDAO.findByID(params.id, function (err, data) {
    helper.findOne(err, data);
  });
};

UserController.prototype.insert = function(request, reply) {
  var helper = new ReplyHelper(request, reply);
  var params = request.payload;

  var insert = Q.denodeify(userDAO.insert);

  insert(params)
  .then(function (data) {
    helper.insert(null, data);
  })
  .catch(function (err) {
    helper.insert(err);
  });
};


const userController = new UserController();
module.exports = userController;
