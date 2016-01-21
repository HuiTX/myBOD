'use strict';

const ReplyHelper = require('../util/reply-helper');
const customDAO = require('../dao/customDAO');

// find user list
exports.find = function (request, reply) {
  var helper = new ReplyHelper(request, reply);
  var params = request.query;
  var index = Number(params.index) || 1;
  var size = Number(params.size) || 10;

  customDAO.find({
    'offset': size * (index - 1),
    'rows': size
  }, function (err, data) {
    helper.find(err, data);
  });
};

// find user by id
exports.findByID = function (request, reply) {
  var helper = new ReplyHelper(request, reply);
  var params = request.params;

  customDAO.findByID(params.id, function (err, data) {
    helper.findOne(err, data);
  });
};
