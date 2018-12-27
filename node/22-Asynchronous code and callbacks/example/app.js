// app.js
var fs = require('fs');

var greeting = fs.readFile(__dirname + '/greet.txt','utf8',(err,data)=>{
    console.log(data);
});

var readable = fs.createReadStream(__dirname + '/text.txt',{ encoding: 'utf8', highWaterMark: 32*1024 });

var writeable = fs.createWriteStream(__dirname + '/textcopy.txt');


readable.on('data', function(chunk){
    writeable.write(chunk)
});