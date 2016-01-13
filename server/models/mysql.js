var mysql = require('mysql');
var wrapper = require('co-mysql');
var co = require('co');

function getConnection(){
  return mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'bod',
      port: 3306
    });
}

var connection = getConnection();
console.log("Mysql connecting...");
module.exports = function *(sql){
  var pool = getConnection(),
      client = wrapper(pool);

  return yield client.query(sql).catch(function() {
      pool.end();
      done();
  });
};

// module.exports = function *(sql, callback) {
//     // var insertSQL = 'insert into t_user(name) values("conan"),("fens.me")';
//     var sql = sql || '';
//     if(!sql)return;

//     connection.query(sql, function(err,data){
//         console.log(err);
//         if(err){
//           console.log('err:' + err);
//         return ;
//         }
//         console.log('success');
//         callback(err,data);
//     });
// };
