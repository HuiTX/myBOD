
const dictController = require('../controllers/dictController');

module.exports = [
  {
    method: 'GET',
    path: '/dict',
    config : {
      handler: dictController.findByDict
    }
  },
  {
    method: 'GET',
    path: '/dict/{dict}',
    config : {
      handler: dictController.findByDict
    }
  },
  {
    method: 'POST',
    path: '/dict',
    config : {
      handler: dictController.insert
    }
  }
];
