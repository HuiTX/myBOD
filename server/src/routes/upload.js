
const uploadController = require('../controllers/uploadController');

module.exports = [
  { // upload file
    method: 'GET',
    path: '/upload/{file}',
    config : {
      handler: uploadController.uploadImg
    }
  }
];
