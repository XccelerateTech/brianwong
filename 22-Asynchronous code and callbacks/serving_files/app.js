var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
    if(req.url === '/') {
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    } else if(req.url === '/assets/image.png') {
        fs.createReadStream(__dirname + '/assets/image.png').pipe(res);
    } else {
        res.writeHead(404);
        res.end();
    }

}).listen(8080, '127.0.0.1');

// var http = require('http');

// http.createServer(function(req, res){

//     res.writeHead(200, { 'Content-Type':'application/json' });
//     var obj = {
//         name: 'John',
//         surname: 'Doe'
//     }
//     res.end(JSON.stringify(obj));

// }).listen(8080, '127.0.0.1');