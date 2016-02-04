'use strict';

const Q = require('q');
const ReplyHelper = require('../util/reply-helper');
const dictDAO = require('../dao/dictDAO');
const Store = require('../util/store');

/**
 * NAME OF DICT
 * boi: 商机重要度, business opportunity importance
 *   [A] boi_stage: 业务阶段
 *   [B] boi_budget: 预算
 *   [C] 胜算率
 *   [C1] boi_role: 负责人
 *   [C2] boi_relation: 关系度
 *   [C3] boi_requirement: 需求满足度
 *   [D] boi_price: 价格 [D]
 * cust: 客户, customer
 *   cust_industry: 行业
 *   cust_income: 年收入
 *   cust_employees: 员工总数
 *   cust_procurement: 采购种类
 *   cust_origin: 客户来源
 * dir: 负责人, director
 *   dir_position: 职位
 * vr: 拜访记录, visit record
 *   vr_purpose: 拜访目的
 *   vr_way: 拜访形式
 *   vr_cost: 费用
 *   vr_promise: 客户承诺
 *   vr_next: 下一步骤
 *   vr_result: 合同促进度　
 *
 */


// define
const DictController = function () {};

// find
DictController.prototype.findByDict = function (request, reply) {
  var isMulti = false;
  var helper = new ReplyHelper(request, reply);
  var params = request.params.dict || request.query.dict || '';

  if (params instanceof Array) {
    isMulti = true;
  }

  dictDAO.findByDict(params, function (err, data) {
    if (!isMulti) {
      helper.find(err, data);
    } else {
      let result = {};
      for (let i in data) {
        let current = data[i];
        let dictName = current['dict'];
        if (!result[dictName]) {
          result[dictName] = [];
        }
        result[dictName].push(current);
      }
      helper.find(err, result);
    }
  });
};
// insert
DictController.prototype.insert = function (request, reply) {
  var helper = new ReplyHelper(request, reply);
  var params = request.payload;

  var insert = Q.denodeify(dictDAO.insert);

  insert(params)
  .then(function (data) {
    helper.insert(null, data);
  })
  .catch(function (err) {
    helper.insert(err);
  });
};

const dictController = new DictController();
module.exports = dictController;
