'use strict';

const _ = require('lodash');
const async = require('async');
const Q = require('q');
const ReplyHelper = require('../util/reply-helper');
const Store = require('../util/store');
const db = require('../middleware/db');
const visitDAO = require('../dao/visitDAO');
const customerDAO = require('../dao/customerDAO');
const directorDAO = require('../dao/directorDAO');


// define
const VisitController = function () {};

function setUserAsI (data, userId) {
  if (data instanceof Array) {
    data.forEach(function (item) {
      if (item.user_id == userId) {
        item.user = '我';
      }
    });
  }
  return data;
};

// find
VisitController.prototype.find = function (request, reply) {
  var helper = new ReplyHelper(request, reply);
  var params = {};
  if (request.query.customer_id) params.customer_id = request.query.customer_id;
  if (request.query.director_id) params.director_id = request.query.director_id;

  visitDAO.findByCondition(params, function (err, data) {
    helper.find(err, data);
  });
};

// findById
VisitController.prototype.findById = function (request, reply) {
  var helper = new ReplyHelper(request, reply);
  var params = {
    id: request.params.id
  };

  async.waterfall([
    // get visit record
    function (callback) {
      visitDAO.findByCondition(params, function (err, data) {

        callback(err, data);
      });
    },
    // get visit purpose
    function (records, callback) {
      if (records[0]) {
        let param = {
          'visit_id': records[0].id
        }
        visitDAO.findPurposeByCondition(param, function (err, data) {
          records[0].purpose = _.map(data, 'purpose_id');
          callback(err, records);
        });
      } else {
        callback(null, records);
      }
    }
  ], function (err, data) {
    if (err) helper.findOne(err, null);
    else helper.findOne(err, data);
  });

};

// findBySelf
VisitController.prototype.findBySelf = function (request, reply) {
  var helper = new ReplyHelper(request, reply);
  //TODO: 非测试环境需去掉默认id　　
  var userId = request.headers.__user ? request.headers.__user.id : 1;
  var params = {
    id: userId
  };

  visitDAO.findByUser(params, function (err, data) {
    helper.find(err, setUserAsI(data, userId));
  });
};

/**
 * 拜访前所需字段
 *   user_id: 用户id (get from token)　
 *   customer_id: 客户id　
 *   director_id: 拜访对象id
 *   purpose: 拜访目的 (array)
 *   way: 拜访形式
 *   relation: 关系度 (director table content)
 *   stage: 业务阶段 (customer table content)
 */
VisitController.prototype.before = function (request, reply) {
  var helper = new ReplyHelper(request, reply);

  let body = request.payload;
  let params = {
    visit: _.pick(body, ['director_id', 'way']),
    purpose: body.purpose || [],
    customer: _.pick(body, ['customer_id', 'stage']),
    director: _.pick(body, ['director_id', 'relation'])
  };

  db.transaction([
    // insert visit
    function (driver, callback) {
      var userId = request.headers.__user ? request.headers.__user.id : 1;
      params.visit.user_id = userId;
      visitDAO.insert(params.visit, function (err, data) {
        callback(err, data);
      }, driver);
    },
    // purpose
    function (result, driver, callback) {
      let visit_id = result.insertId;
      let purpose = [];
      params.purpose.forEach(function (item) {
        purpose.push([visit_id, item]);
      });
      if (purpose.length > 0) {
        visitDAO.insertPurpose(purpose, function (err, data) {
          callback(err, {
            id: visit_id
          });
        }, driver);
      } else {
        callback(null, {
          id: visit_id
        });
      }
    },
    // customer
    function (result, driver, callback) {
      let param = {
        id: params.customer.customer_id,
        stage: params.customer.stage
      };
      customerDAO.update(param, function (err, data) {
        callback(err, result);
      }, driver);
    },
    // director
    function (result, driver, callback) {
      let param = {
        id: params.director.director_id,
        relation: params.director.relation
      };
      directorDAO.update(param, function (err, data) {
        callback(err, result);
      }, driver);
    }
  ], function (err, result) {
    helper.insert(err, result);
  });

};

/**
 * 拜访后所需字段
 *   id: 标识
 *   user_id: 用户id (get from token)　
 *   cost: 费用
 *   promise: 客户承诺
 *   next: 下一步骤
 *   result: 合同促进度　
 *   partner: 协同拜访人
 *   date: 完成时间，拜访时间
 */
VisitController.prototype.after = function (request, reply) {
  var helper = new ReplyHelper(request, reply);
  let body = request.payload;
  let id = body.id;
  let params = _.pick(body, ['cost', 'promise', 'next', 'result', 'partner', 'date']);
  params.state = 2;

  var update = Q.denodeify(visitDAO.update);

  update(id, params)
  .then(function(data) {
    helper.update(null, {
        id: id
    });
  })
  .catch(function(err) {
    helper.update(err);
  });

};

const visitController = new VisitController();
module.exports = visitController;
