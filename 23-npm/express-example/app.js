let express =require('../node_modules/express');
let app = express();

app.get('/', function(req, res) {
    res.send('hello');
});

app.get('/nothing/:module', function(req, res){
    res.send('the user id is ' + req.params.module);
});

app.post('/login', function(req, res) {
    console.log(req.path);
    res.send('post received');
});

app.listen(8080);