'use strict';

const Boom = require('boom');

function ReplyHelper (request, reply) {
  this.request = request;
  this.reply = reply;
};

// replay one record
ReplyHelper.prototype.findOne = function(err, data) {
  if (err) {
    return this.reply(Boom.badImplementation(err));
  }

  if (data[0]) {
    this.reply(data[0]).type('application/json');
  } else {
    this.reply(Boom.notFound('data not found.'));
  }
};

// replay list
ReplyHelper.prototype.find = function(err, data) {
  if (err) {
    return this.reply(Boom.badImplementation(err));
  }

  this.reply({
    'items': data
  }).type('application/json');
};

// replay
ReplyHelper.prototype.insert = function(err, data) {
  if (err) {
    return this.reply(Boom.badImplementation(err));
  }

  this.reply(data).code(201).type('application/json');
};

// replay
ReplyHelper.prototype.update = function(err, data) {
  if (err) {
    return this.reply(Boom.badImplementation(err));
  }

  this.reply(data).code(200).type('application/json');
};

module.exports = ReplyHelper;
