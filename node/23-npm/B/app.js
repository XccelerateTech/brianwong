let express =  require('../node_modules/express');
let fs = require('fs')
let app = express();


app.get('/',(req,res) => {
    fs.createReadStream(__dirname+'/flowershop.html').pipe(res);
})

app.use(express.static('assets'));

app.listen(8080);