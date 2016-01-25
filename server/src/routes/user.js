
const userController = require('../controllers/userController');

module.exports = [
  { // find user info
    method: 'GET',
    path: '/user/{id}',
    config : {
      handler: userController.findByID
    }
  },
  { // new user
    method: 'GET',
    path: '/user/login',
    config : {
      handler: userController.login
    }
  },
  { // find user list
    method: 'GET',
    path: '/user',
    config : {
      handler: userController.find
    }
  },
  { // new user
    method: 'POST',
    path: '/user',
    config : {
      handler: userController.insert
    }
  }
];
