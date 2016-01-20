'use strict';

const _ = require('lodash');
const _opt = {};

function Store () {
};

Store.set = function(opt) {
    _.extend(_opt, opt);
    console.log(_opt);
};

Store.get = function() {
    return _opt;
};

module.exports = Store;
