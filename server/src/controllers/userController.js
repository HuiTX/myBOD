'use strict';

const Q = require('q');
const ReplyHelper = require('../util/reply-helper');
const userDAO = require('../dao/userDAO');
const Store = require('../util/store');
const jwt = require('jsonwebtoken');

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

// find user list
UserController.prototype.login = function (request, reply) {
  var helper = new ReplyHelper(request, reply);
  var params = null;
  console.log(request.headers)
  try{
      if(request.headers.body){
          params = JSON.parse(request.headers.body);
      }
  }catch(e){
      params = request.query;
  }

  userDAO.findByParam(params, function (err, data) {
    if(err)throw err;

    try{
        if(data[0].password == params.password) {
            var token = jwt.sign(params, 'bod');

            Store['token'] = token;
            reply({'status':'ok','message':'登录成功！','token':token}).type('application/json');
        }else{
            Store['token'] = null;
            reply({'status':'error', 'message':'密码错误！'}).type('application/json');
        }
    }catch(e){
        reply({'status':'error','message':'用户名不存在！'}).type('application/json');
    }
    
  });
};

const userController = new UserController();
module.exports = userController;
