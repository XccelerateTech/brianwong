const express = require('express')
const hds = require('express-handlebars')
const NoteService = require('./NoteService')
const basicAuth = require('express-basic-auth')
const bodyParser = require('body-parser')

const app = express();
let user; 
const note = new NoteService('notesFile.json')
const userList = new NoteService('userList.json')

//set view engine
app.engine('handlebars',hds({defaultLayout: 'main'}))
app.set('view engine','handlebars')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false })) 


//set basic authentication
app.use(basicAuth({
    authorizer: myAuthrizer,
    challenge: true
}))


async function myAuthrizer(username,password){
    let users = await userList.listNote()
    return users.some((item)=>{
        if(item.username == username && item.password == password){
            user = item.username;
            return true;
        }else{
            return false;
        }
    })
}


app.put('/note',async (req,res)=>{ 
    await note.addNote(req.body.note);
    res.send({note: req.body.note});
})


//delete note in server
app.delete('/note', async (req,res)=>{
    await note.deleteNote(req.body.index);
    res.end();
})


app.get('/',async (req,res)=>{ 
    let noteList = await note.listNote()
    let list = {notes: noteList, user: user} 
    res.render('hello',list)
})



app.listen(8080);