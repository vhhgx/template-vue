var express = require('express')
var fs = require('fs')
var path = require('path')
var bodyParser = require('body-parser')
var app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// 访问静态资源
app.use(express.static(path.resolve(__dirname, '../dist')))
app.use(express.static(path.join(__dirname, 'public')));

// 跨域
app.all("*",function(req,res,next){
  //设置允许跨域的域名，*代表允许任意域名跨域
  res.header("Access-Control-Allow-Origin","*");
  //允许的header类型
  res.header("Access-Control-Allow-Headers","content-type");
  //跨域允许的请求方式
  res.header("Access-Control-Allow-Methods","DELETE,PUT,POST,GET,OPTIONS");
  // res.header('Content-Type', 'application/json;charset=utf-8');
  if (req.method.toLowerCase() == 'options') {
    res.sendStatus(200)
  } else { next(); }
});

// 路由
app.use('/', require('./routes/index'))

// 访问单页
app.get('*', function (req, res) {
 var html = fs.readFileSync(path.resolve(__dirname, '../dist/index.html'), 'utf-8')
 res.send(html)
})

// 监听端口
app.listen(8081, function () { console.log('成功监听8081端口') })