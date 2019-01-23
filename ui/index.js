//index.js
// 需要Elasticsearch librray
// const elasticsearch = require('elasticsearch');
// 实例化一个elasticsearch客户端
// const client = new elasticsearch.Client({
   // hosts: [ 'http://localhost:9200']
// });
//require Express
const express = require( 'express' );
// 实例化一个表达式的实例并将其保存在一个名为app的常量中
const app     = express();
// 引入body-parser库。将用于解析主体请求
const bodyParser = require('body-parser')
//require the path library
const path    = require( 'path' );
const http  = require('http')
const querystring = require('querystring')
// 使用bodyparser作为中间件
app.use(bodyParser.json())
// 设置应用程序侦听的端口
app.set( 'port', process.env.PORT || 3001 );
// 设置路径来提供静态文件
app.use( '/component',express.static( path.join( __dirname, 'component' )));
// 启用CORS 
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// 定义了基本路线并返回一个名为tempate.html的HTML文件
app.get('/', function(req, res){
   res.sendFile('dialog.html', {
     root: path.join( __dirname, 'views' )
   });
   res.locals.http=http
   res.locals.querystring=querystring
})

// 定义应该返回弹性搜索结果的/ search路径
// 监听一个指定的端口
app.listen( app.get( 'port' ), function(){
  console.log( 'Express server listening on port ' + app.get( 'port' ));
} );
