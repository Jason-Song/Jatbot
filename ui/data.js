const elasticsearch = require('elasticsearch');
// 实例化一个Elasticsearch客户端
const client = new elasticsearch.Client({
   hosts: [ 'http://localhost:9200']
});
// ping客户端以确保Elasticsearch已启动
client.ping({
     requestTimeout: 30000,
 }, function(error) {
 // 此时，eastic搜索已关闭，请检查您的Elasticsearch服务
     if (error) {
         console.error('Elasticsearch cluster is down!');
     } else {
         console.log('Everything is ok');
     }
 });