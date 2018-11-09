const express = require('express');
const basicAuth = require('express-basic-auth');

const app = express();

const USERS =  [{'admin': 'password'}, {'admin2': 'password2'}]

let myAuthFunc = (username, password)=> {
    return USERS.some(user => {
        return user.key() == username && user.password == password
    })
}

app.use(basicAuth({
    authorizer: myAuthFunc,
    // challenge: true //pop up authentication box
}))

app.get('/',(req,res)=>{
    res.send('hello there Mr/Mrs Authenticated')
})



app.listen(8080,()=>{
    console.log('I am running on port 8080')
})

 