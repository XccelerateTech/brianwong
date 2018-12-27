let PromisedFs = require('./fs_promised')
let fs = new PromisedFs();
let path = [];

async function doEach(arr,callback){
    for(let element of arr){
        await callback(element)
    }
}

async function readDicrectory(dir){
    let arr = await fs.readdir(dir)
    await doEach(arr,determine);
    path.pop();
}        


async function determine(item){
    path.push(item);
    let stat = await fs.stat(__dirname+'/'+path.join('/'));
    if(stat.isDirectory()){
        console.log(`/${path.join('/')} is a directory`);
        await readDicrectory(__dirname+'/'+path.join('/'));
    }else if (stat.isFile()){
        console.log(`/${path.join('/')} is a file`);
        path.pop();
    }
}




// function determine(item){
//     return new Promise((resolve,reject)=>{
//         path.push(item); //go down one layer
//         fs.stat(__dirname+'/'+path.join('/')) //identify folder or file
//         .then((dir)=>{
//             if(dir.isDirectory()){ //folder
//                 console.log(`/${path.join('/')} is a directory`);
//                 fs.readdir(__dirname+'/'+path.join('/'))
//                 .then((arr)=>{
//                     doEach(arr,determine);
//                 })
//             }else if(dir.isFile()){ //file
//                 console.log(`/${path.join('/')} is a file`);
//                 path.pop();
//                 resolve();
//             }
//         })
//     })
// }


determine('files');

        