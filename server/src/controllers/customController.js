'use strict';

const Q = require('q');
const ReplyHelper = require('../util/reply-helper');
const customDAO = require('../dao/customDAO');

// define
const CustomController = function () {};

// find user list
CustomController.prototype.find = function (request, reply) {
  var helper = new ReplyHelper(request, reply);
  var params = request.query;
  console.log(params);

  // pager params
  var index = Number(params.index) || 1;
  var size = Number(params.size) || 10;

  // for(para in ){

  // };

  customDAO.find({
    'offset': size * (index - 1),
    'rows': size
  }, function (err, data) {
    helper.find(err, data);
  });
};

// find user by id
CustomController.prototype.findByID = function (request, reply) {
  var helper = new ReplyHelper(request, reply);
  var params = request.params;

  customDAO.findByID(params.id, function (err, data) {
    helper.findOne(err, data);
  });
};

CustomController.prototype.insert = function(request, reply) {
  var helper = new ReplyHelper(request, reply);
  var params = request.payload;

  var insert = Q.denodeify(customDAO.insert);

  insert(params)
  .then(function (data) {
    helper.insert(null, data);
  })
  .catch(function (err) {
    helper.insert(err);
  });
};


const customController = new CustomController();
module.exports = customController;
