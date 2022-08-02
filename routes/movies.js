var express = require('express');
var router = express.Router();
var movies = require('../movies.json');
const getConnection = require('./mysql_db');
const logger = require('../config/winston');

router.get('/', function (req, res, next) {
     var data = [1, "isk"];

      try{
        getConnection((conn) => {
          conn.query('INSERT INTO test_table values (?, ?)', data, function (err, result) {
            if (err) {
              throw err;
            }else{
            }
          });
          conn.release();
        });
    
      }catch(error){
        
      }

 res.send(movies)
});


// 영화 상세 페이지를 위한 코드
router.get('/:id', function (req, res, next) {
 var id = parseInt(req.params.id, 10)
 var movie = movies.filter(function (movie) {
 return movie.id === id
 });
 res.send(movie)
});


module.exports = router;