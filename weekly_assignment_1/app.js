//load modules
let express = require('express')
let fileUpLoad = require('express-fileupload')
let fs = require('fs')
let hbs = require('express-handlebars')

//create instance
let app = express();

//load application
app.use(fileUpLoad());
app.engine('handlebars',hbs({defaultLayout:'index'}))
app.set('view engine','handlebars')

app.get('/', (req,res)=>{
    let arr = await fs.readdir(__dirname+'upload')
    console.log(arr)
    res.render('fileList',{file: ['files','les']})
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