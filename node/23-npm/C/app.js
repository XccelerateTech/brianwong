let express = require('../node_modules/express');

let app = express();

app.post('/login',(req,res)=>{
    res.send('hello')
    console.log(req.body)
})

app.listen(8080);
