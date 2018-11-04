let fs = require('fs')

class PromisedFs{
    constructor(){};
    createReadStream(path){
        return new Promise((resolve,reject)=>{
            resolve(fs.createReadStream(path))
        })
    }
}

module.exports = PromisedFs