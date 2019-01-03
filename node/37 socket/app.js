const express = require('express');
const hbs = require('express-handlebars');
const app = express();
const http = require('http').Server(app);
const router = require('./router')(express);
require('./socket')(http,router);

app.engine('handlebars',hbs({defaultLayout: 'main'}));
app.set('view engine','handlebars');
app.use(express.static('public'));
app.use('/',router);


http.listen(8000);







