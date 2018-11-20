const redis = require('redis');

const client = redis.createClient() //default: host - 127.0.0.1  port 6379

client.on('error',err =>{
    console.log(err)
})

client.set('string','this is a string')







