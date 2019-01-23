const elasticsearch = require('elasticsearch');
// ʵ����һ��Elasticsearch�ͻ���
const client = new elasticsearch.Client({
   hosts: [ 'http://localhost:9200']
});
// ping�ͻ�����ȷ��Elasticsearch������
client.ping({
     requestTimeout: 30000,
 }, function(error) {
 // ��ʱ��eastic�����ѹرգ���������Elasticsearch����
     if (error) {
         console.error('Elasticsearch cluster is down!');
     } else {
         console.log('Everything is ok');
     }
 });