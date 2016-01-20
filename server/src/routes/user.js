
const userController = require('../controllers/userController');

module.exports = [
  { // find user info
    method: 'GET',
    path: '/user/{id}',
    config : {
      handler: userController.findByID
    }
  },
  { // find user list
    method: 'GET',
    path: '/user',
    config : {
      handler: userController.find
    }
  }
];
