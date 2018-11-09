const express = require('express')
const hds = require('express-handlebars')
const bodyParser = require('body-parser')
const NoteService = require('./NoteService')

let app = express();
const note = new NoteService('notesFile.json')


app.engine('handlebars',hds({defaultLayout: 'main'}))
app.set('view engine','handlebars')

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false })) 

app.put('/note',async (req,res)=>{ //incompleted
    await note.addNote(req.body.note)
    res.end()
})

app.get('/',async (req,res)=>{ 
    let noteList = await note.listNote()
    let list = {notes: noteList, user: 'brian'} 
    res.render('hello',list)
})

app.listen(8080);