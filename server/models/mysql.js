var mysql = require('mysql');
var wrapper = require('co-mysql');
var co = require('co');

function getConnection(){
  return mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'mysql',
      port: 3306
    });
}

var connection = getConnection();
// module.exports = function *(sql){
//   var pool = mysql.createPool(getConnection()),
//       client = wrapper(pool);
//       console.log(client);
//   return yield client.query(sql).catch(function() {
//       pool.end();
//       done();
//   });
// };

module.exports = function(sql, callback) {
    // var insertSQL = 'insert into t_user(name) values("conan"),("fens.me")';
    var sql = sql || '';
    if(!sql)return;

    connection.query(sql, function(err,res){
      console.log(err);
        if(err){
        console.log('err:' + err);
        return ;
        }
        console.log('selsct success');
        callback(err,res);
    });
};
