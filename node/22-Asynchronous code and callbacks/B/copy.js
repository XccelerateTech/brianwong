let fs = require('fs');

function copy(path){
    let readable = fs.createReadStream(path,{encoding:'utf8'})
    let writable = fs.createWriteStream(__dirname+'/next_folder/file.txt');
    readable.pipe(writable);
}

copy('./file.txt')