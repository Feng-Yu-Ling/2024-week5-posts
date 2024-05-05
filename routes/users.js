var express = require('express');
// 建立一個新的路由object來處理路由
var router = express.Router();

// 設置路由器以處理GET請求到根路徑 ('/')
router.get('/', function(req, res, next) {
  // 當該路徑收到GET請求時，發送回一個字串響應
  res.send('respond with a resource');
});

router.get('/login', function(req, res, next) {
  // 當該路徑收到GET請求時，發送回一個字串響應
  res.send('respond login');
});

module.exports = router;
