const fs = require('fs');

class Promisedfs{
    constructor(){}
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
    
    stat(path){
        return new Promise((resolve,reject)=>{
            fs.stat(path,(err,files)=>{
                if(err){
                    reject(err)
                }else{
                    resolve(files)
                }
            });
        });
    }
}




module.exports = Promisedfs

