const redis = require('redis');
const express = require('../../node_modules/express')
const bodyParser = require('../../node_modules/body-parser')

const client = redis.createClient() //default: host - 127.0.0.1  port 6379
const app = express();

app.use(bodyParser.json())

client.on('error',err =>{
    console.log(err)
})

app.put('/',(req,res)=>{
    client.lpush('messageQueue',{
        "msg":req.body.msg,
        "date": req.body.date,
    })     
})

app.listen(8080)







