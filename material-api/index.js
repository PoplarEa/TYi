const express = require("express")
const app = express()
app.use(require("cors")())
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({extended: true}))

// 引入mysql数据库连接
var mysql      = require('mysql');
var db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  database : 'odd'
});
 
db.connect();

// ddfd

// 首页轮播图
app.get("/api/v1/odd-swiper", (req, res) => {
  // 查询语句
  let sql = 'SELECT image FROM swiper'
  db.query(sql, (err, data) => {
    if(err) {
      res.json({
        'ok': 0,
        'error': err
      })
    } else {
      res.json({
        'ok': 1,
        'datas': data
      })
    }
  })
})

app.listen(8080, () => console.log('成功监听: 127.0.0.1:8080'))