var elasticsearch = require('elasticsearch');

var client = new elasticsearch.Client();

var client = elasticsearch.Client({
  hosts: [
    'localhost:9200'
  ]
});

client.cluster.health(function (err, resp) {
  if (err) {
    console.error(err.message);
  } else {
    console.dir(resp);
  }
});

client.search({
  index: 'stuff_orders',
  type:'order_list',
  size: 50,
  body: {
    query: {
      match: {
		  "real_name":"关羽"
	  }
    }
  }
}).then(function (resp) {
  var hits = resp.hits;
  console.log(hits.hits[0]._source)
}).catch(err=>{
    console.log(err)
  });
