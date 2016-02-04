
const visitController = require('../controllers/visitController');

module.exports = [
  {
    method: 'GET',
    path: '/visit/self',
    config: {
      handler: visitController.findBySelf
    }
  },
  {
    method: 'GET',
    path: '/visit',
    config: {
      handler: visitController.find
    }
  },
  {
    method: 'GET',
    path: '/visit/{id}',
    config: {
      handler: visitController.findById
    }
  },
  // { // 添加拜访记录
  //   method: 'POST',
  //   path: '/visit',
  //   config: {
  //     handler: visitController.insert
  //   }
  // },
  { // 添加拜访记录，拜访前
    method: 'POST',
    path: '/visit/step/before',
    config: {
      handler: visitController.before
    }
  },
  { // 添加拜访记录，拜访后
    method: 'POST',
    path: '/visit/step/after',
    config: {
      handler: visitController.after
    }
  }
];
