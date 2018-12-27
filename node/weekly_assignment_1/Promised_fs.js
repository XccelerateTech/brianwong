let fs = require('fs')

class PromisedFs{
    constructor(){};
    readdir(path){
        return new Promise((resolve,reject)=>{
            fs.readdir(path,(err,files)=>{
                if(err){
                    reject(err)
                }else{
                    resolve(files)
                }
            });
        });
    }
}

module.exports = PromisedFs