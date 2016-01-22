
const customController = require('../controllers/customController');

module.exports = [
  { // find custom info
    method: 'GET',
    path: '/custom/{id}',
    config : {
      handler: customController.findByID
    }
  },
  { // find custom list
    method: 'GET',
    path: '/custom/get',
    config : {
      handler: customController.find
    }
  },
  { // find custom list
    method: 'POST',
    path: '/custom',
    config : {
      handler: customController.insert
    }
  }
];
