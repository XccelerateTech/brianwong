let http = require('http');
let fs = require('fs');

http.createServer((req,res) => {
    let url = req.url;
    if(req.url === '/'){
        fs.createReadStream(__dirname + '/flowershop.html').pipe(res);
    }else if(req.url){ 
        fs.createReadStream(__dirname +url).pipe(res);   
    }else {
        res.writeHead(404);
        res.end();
    }
}).listen(8080,'127.0.0.1');