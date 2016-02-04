
const customerController = require('../controllers/customerController');

module.exports = [
  { // find customer info
    method: 'GET',
    path: '/customer/{id}',
    config : {
      //auth: 'token',
      handler: customerController.findByID
    }
  },
  { // find customer info
    method: 'GET',
    path: '/customer',
    config : {
      //auth: 'token',
      handler: customerController.find
    }
  },
  { // find customer info
    method: 'GET',
    path: '/customer/getBySelf',
    config : {
      //auth: 'token',
      handler: customerController.getBySelf
    }
  },
  { // find customer info
    method: 'GET',
    path: '/customer/getAll',
    config : {
      //auth: 'token',
      handler: customerController.findAll
    }
  },
  { // find customer list
    method: 'POST',
    path: '/customer',
    config : {
      //auth: 'token',
      handler: customerController.insert
    }
  },
  { // find customer list
    method: 'POST',
    path: '/customer/update',
    config : {
      //auth: 'token',
      handler: customerController.update
    }
  },
  { // find customer children
    method: 'GET',
    path: '/customer/findChildren',
    config : {
      //auth: 'token',
      handler: customerController.findChildren
    }
  },
  { // find customer joinDict
    method: 'GET',
    path: '/customer/joinDict',
    config : {
      //auth: 'token',
      handler: customerController.joinDict
    }
  }
];
