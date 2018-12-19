const express = require('express');
const hds = require('express-handlebars');
const NoteService = require('./NoteService');
const bodyParser = require('body-parser');
const setUpLocalPassport = require('./localPassport');
const setupFacebookPassport = require('./facebookPassport')
const session = require('express-session');
require('dotenv').config;

let app = express( );
const note = new NoteService('notesFile.json');
const router = require('./router')(express,note);
setUpLocalPassport(app);  //import strategy
setupFacebookPassport(app);

//set view engine
app.engine('handlebars',hds({defaultLayout: 'main'}))
app.set('view engine','handlebars')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false })) 

app.use(session({
    secret: 'supersecret'
}));


// //set basic authentication
// app.use(basicAuth({
//     authorizer: myAuthrizer,
//     challenge: true
// }))

// function myAuthrizer(){
//     return function (user,password){
//         return user === process.env.user && password === process.env.password
//     }
// }


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
    res.render('login')
})


app.use('/', router)

app.listen(8080);