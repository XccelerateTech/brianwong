let fs = require('fs')

class PromisedFs{
    constructor(){};
    async createReadStream(path){
       return fs.createReadStream(path)
    }
}

module.exports = PromisedFs