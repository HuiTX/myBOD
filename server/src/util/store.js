'use strict';

const userDAO = require('../dao/userDAO');
// const customerController = require('../controllers/customerController');
// const directorController = require('../controllers/directorController');
const _ = require('lodash');
const _opt = {};

var Store = {};

Store.set = function(opt) {
    _.extend(_opt, opt);
    //console.log(_opt);
};

Store.get = function(params) {
    if(params){
        return _opt[params];
    }
    return _opt;
};

Store.token = function(token, param, callback) {
    let _token = _opt[token];
    let _param = _opt[param];

    if(!_token)return callback(401);

    switch(param){
        case 'user':
            try{
                _opt['user'] && _opt['user']['id'];
                return callback(null, Store.get());
            }catch(e){
                userDAO.findByID(_token, true, function (err, data) {
                    if(err)return callback(err);

                    Store.set({
                        user:data
                    });
                    return callback(null, Store.get());
                });
            }
        break;
        default: 
        break;
    }
};

module.exports = Store;
