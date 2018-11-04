//load modules
let express = require('express')
let fileUpLoad = require('express-fileupload')
let fs = require('fs')

//create instance
let app = express();

//load application
app.use(fileUpLoad());

app.get('/',(req,res)=>{
    fs.createReadStream(__dirname+'/index.html').pipe(res)
    
})


app.post('/upload',(req,res)=>{  //upload files
    let name = req.files.uploadFile.name
    req.files.uploadFile.mv(__dirname+'/upload/'+name,function(err){
        if (err){
            return res.status(500).send(err)
        }
    })
})

async function getName(req){
    return req.params.filename
}



app.get('/:filename',async (req,res)=>{
    let filename = await getName(req)
    let file = fs.createReadStream(__dirname+'/upload/'+filename)

    file.on('data',(chunk))
})
// async function download(res,path){
//     res.download(path)
// }


 

// app.get('/:filename', async (req,res,next)=>{ //download files
//     let filename = await getName(req)
//     let error = false
//     // fs.createReadStream(__dirname+'/upload/'+filename).pipe(res)
//     await download(res,__dirname+'/upload/'+filename,err =>{
//         if(err){
//             error = true;
//         }else{
//             next()
//         }
//     })
    
    
// })

// app.get('/:filename',(req,res)=>{
//     res.send('file downloaded')
// })




app.listen(8080);