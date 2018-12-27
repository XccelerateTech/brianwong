//load modules
let express = require('express')
let fileUpLoad = require('express-fileupload')
let fs = require('fs')
let hbs = require('express-handlebars')
let PromiseFs = require('./Promised_fs')

//create instance
let app = express();
let pfs = new PromiseFs();

//load application
app.use(fileUpLoad());
app.engine('handlebars',hbs({defaultLayout:'index'}))
app.set('view engine','handlebars')


app.get('/', async (req,res)=>{
    let arr = await pfs.readdir(__dirname+'/upload')
    if(arr.indexOf('.DS_Store') != -1){
        arr.splice(arr.indexOf('.DS_Store'),1);
    }
    res.render('fileList',{file: arr})
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
})





app.listen(8080);