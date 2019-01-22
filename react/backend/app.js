const express = require('express')
const bodyParser = require('body-parser');
const jwt = require('jwt-simple');
const axios = require('axios');
const authClass = require('./auth');
const config = require('./config');
const users = require('./users');
const cors = require('cors');

const app = express();
const auth = authClass();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(auth.initialize())
app.use(cors())

app.get('/api',(req,res)=>{
    res.json('online')
})


app.get('/api/users',auth.authenticate(),(req,res)=>{
    console.log(req.user);
    res.json(users);
})

app.post('/api/signup',(req,res)=>{
    let name = req.body.name;
    let email = req.body.email;
    let password = req.body.password;

    let user = {
        id:users.length,
        name,email,password
    }

    users.push(user);

    let payload = {
        id: user.id,
        username: user.name
    }

    let token = jwt.encode(payload,config.jwtSecret);
    res.json({
        token: token
    });
})

app.post('/api/signin',(req,res)=>{
    let name= req.body.name;
    let password = req.body.password;

    let user = users.find((candidate)=>{
        return candidate.name === name && candidate.password === password
    })

    if(user){
        let payload = {
            id: user.id,
            username: user.name
        }
    
        let token = jwt.encode(payload,config.jwtSecret);
        res.json({
            token: token
        }); 

        console.log(token)
        
    }else{
        res.sendStatus(401)
    }
})

app.listen(8080)