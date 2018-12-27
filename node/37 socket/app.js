const express = require('express');
const hbs = require('express-handlebars');
const app =express();
const http = require('http').Server(app);
const router = require('./router');
require('./socket')(http);

app.engine('handlebars',hbs({defaultLayout: 'main'}));
app.set('view engine','handlebars');
app.use('/',router);

http.listen(8000);







