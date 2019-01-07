import express from 'express'
import * as bodyParser from 'body-parser';
import * as jwt from 'jwt-simple';
import axios from 'axios';
import authClass from './auth';
import config from './config';
import groups from './groups';
import users from './users';
import * as cors from 'cors';

const app = express();
const auth = authClass();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(auth.initialize())

app.get('api/groups',auth.authenticate(),(req,res)=>{
    res.json(groups)
})

app.get('api/users',auth.authenticate(),(req,res)=>{
    console.log(req.user);
    res.json(users);
})

app.post('api/signup',(req,res)=>{
    let name:string = req.body.name;
    let email:string = req.body.email;
    let password:string = req.body.password;

    let user = {
        id:users.length,
        name,email, password
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
    console.log
})