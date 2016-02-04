'use strict';

const Q = require('q');
const ReplyHelper = require('../util/reply-helper');
const userDAO = require('../dao/userDAO');
const Store = require('../util/store');
const jwt = require('jsonwebtoken');
const Boom = require('boom');

// define
const MemberController = function () {};

// find user list
MemberController.prototype.login = function (request, reply) {
  var helper = new ReplyHelper(request, reply);
  var params = request.payload;
  var password = params.password;

  delete params.password;

  userDAO.find(params, false, function (err, data) {
    if(err)throw err;

    try{
        var _data = data[0];

        if(_data.password == password) {
            var token = jwt.sign(params, 'bod');
            var opt = {};

            opt[token] = _data.id;
            opt['user'] = _data;
            
            Store.set(opt);
            //delete _data.password;
            //var _user = encodeURIComponent(JSON.stringify(_data));

            reply({token:token})
              .type('application/json')
              .code(200);

        }else{
            reply({'status':'error', 'message':'密码错误！'}).type('application/json').code(401);
        }
    }catch(e){
        reply({'status':'error','message':'用户名不存在！'}).type('application/json').code(401);
    }    
  });
};

const memberController = new MemberController();
module.exports = memberController;
