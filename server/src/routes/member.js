
const memberController = require('../controllers/memberController');

module.exports = [
  { // login
    method: 'POST',
    path: '/login',
    config : {
      handler: memberController.login
    }
  }
];
