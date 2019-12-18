var http = require("http"); //httpオブジェクト生成
var server = http.createServer(function(req,res){   //サーバーオブジェクト生成
  //サーバーにリクエストがあった際に動作するコールバック関数を定義
  res.writeHead(200,{'Connect-Type': 'text/plain'});  //httpヘッダ書き出し  
  res.write('Hello World'); //htmlコンテンツ書き出し
  res.end();  //htmlコンテンツ出力を完了
});

server.listen(1234);  //ポート番号を指定してサーバーを待ち受け状態にする
console.log('サーバーを起動しました');