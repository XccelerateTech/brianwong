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
    res.send('file uploaded')
    })
})

async function getName(req){
    return req.params.filename
}



app.get('/:filename', async (req,res)=>{ //download files
    let filename = await getName(req)
    res.download(__dirname+'/upload/'+filename);
    // res.attachment(filename)
    // fs.createReadStream(__dirname+'/index.html').pipe(res)
})





app.listen(8080);