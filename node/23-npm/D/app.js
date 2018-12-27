let express = require('../node_modules/express');
let bodyParser = require('../node_modules/body-parser');

let app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.post('/index',(req,res)=>{
    let arr = req.body.arr
    let sum = arr.reduce((acc,item)=>{
        return acc+Number(item);
    },0);
    res.send(sum.toString());
})

app.listen(8080);