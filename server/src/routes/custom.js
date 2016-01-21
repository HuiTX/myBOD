
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
    path: '/custom',
    config : {
      handler: customController.find
    }
  }
];
