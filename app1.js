var http = require('http');
 
var server = http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('Hey-Naruto');
});

server.listen(3000);
console.log('now listing to port 300');