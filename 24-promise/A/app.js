let PromisedFs = require('./fs_promised')
let fs = new PromisedFs();
let path = [];




function determine(item){
    return new Promise((resolve,reject)=>{
        path.push(item); //go down one layer
        fs.stat(__dirname+'/'+path.join('/')) //identify folder or file
        .then((dir)=>{
            if(dir.isDirectory()){ //folder
                console.log(`/${path.join('/')} is a directory`)
                fs.readdir(__dirname+'/'+path.join('/'))
                .then((arr)=>{
                    Promise.all(arr.map(element=>{
                        determine(element)
                    }))
                    .then(()=>{
                        path.pop()
                    })
                })
            }else if(dir.isFile()){ //file
                console.log(`/${path.join('/')} is a file`)
                path.pop();
                throw new Error('not directory')
            }
        })
        .catch(err=>{
            resolve()
        })
    })
}


determine('files');

        