var express = require('express');
var router = express.Router();
const winston = require('../config/winston');  // 로깅 추가


const config = {
  host: 'localhost',
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  port: process.env.MYSQL_PORT,
  connectionLimit: 30
}

/* GET users listing. */
router.get('/', function(req, res, next) {
  //var is = process.env.MYSQL_USER;
  
  var errorMsg;

  try{
    getConnection((conn) => {
      conn.query('INSERT INTO test_table values (?, ?)', data, function (err, result) {
        if (err) {
          console.error(err);
          throw err;
        }
      });
      conn.release();
    });


  }catch(error){
    errorMsg = error.toString();
    console.log(error.toString());
  }


res.send(errorMsg);

});

module.exports = router;
