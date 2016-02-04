
const directorController = require('../controllers/directorController');

module.exports = [
  { // by id
    method: 'GET',
    path: '/director/{id}',
    config : {
      handler: directorController.findByID
    }
  },
  { // get director
    method: 'GET',
    path: '/director',
    config : {
      handler: directorController.findByCustomer
    }
  },
  { // insert director
    method: 'POST',
    path: '/director',
    config : {
      handler: directorController.insert
    }
  },
  { // update director
    method: 'POST',
    path: '/director/update',
    config : {
      handler: directorController.update
    }
  }
];
