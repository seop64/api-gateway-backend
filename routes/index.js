var express = require('express');
var router = express.Router();
var path = require('path'); //추가된 부분

// 근데 이거 안씀
/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.sendFile(path.join(__dirname, '../public/index.html')); // 수정된 부분
});

router.post('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../public', 'index.html')); // 수정된 부분
});
// 
module.exports = router;
