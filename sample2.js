var http = require("http");
var fs = require('fs');

var server = http.createServer(function(req,res){
  fs.readFile('./temp2.html','utf-8',function(err,data){
    res.writeHead(200,{'Connect-Type': 'text/html'});
    res.write(data);
    res.end();
  });
});

server.listen(1234);
console.log('サーバーを起動しました');