var views = require('co-views');
var path = require('path');

module.exports = views(path.join(__dirname, '../views'), {
  map: {html: 'swig'}
});
