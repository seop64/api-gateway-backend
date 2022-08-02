
const mysql = require('mysql');
const config = require('../config/db_config.json');
const logger = require('../config/winston');


const { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE, DB_PORT } = process.env;

// let pool = mysql.createPool(config);  

// mysql 연결
const pool = mysql.createPool({
  connectionLimit: 5000,
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  port: DB_PORT,
  multipleStatements: true
});

logger.info(DB_HOST);
logger.info(DB_USER);
logger.info(DB_PASSWORD);
logger.info(DB_DATABASE);


// let pool = mysql.createPool(config);  

function getConnection(callback) {
  pool.getConnection(function (err, conn) {
    if(!err) {
      callback(conn);
    }else{
      logger.info('mysql error');
      logger.info(err.toString());
    }
  });
}

module.exports = getConnection;
