const express = require('express');
const hds = require('express-handlebars');
const NoteService = require('./NoteService');
const basicAuth = require('express-basic-auth');
const bodyParser = require('body-parser');
require('dotenv').config;

let app = express( );
const note = new NoteService('notesFile.json')

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

function myAuthrizer(){
    return function (user,password){
        return user === process.env.user && password === process.env.password
    }
}


app.put('/note',async (req,res)=>{ 
    await note.addNote(req.body.note);
    res.end();
})


//delete note in server
app.delete('/note', async (req,res)=>{
    await note.deleteNote(req.body.index);
    res.end();
})


app.get('/',async (req,res)=>{ 
    let noteList = await note.listNote()
    let list = {notes: noteList, user: process.env.user} 
    res.render('hello',list)
})



app.listen(8080);