const express = require('express');
const hbs = require('express-handlebars');
const app = express();
// require('./socket')(http,router);

app.engine('handlebars',hbs({defaultLayout: 'main'}));
app.set('view engine','handlebars');
app.use(express.static('public'));

app.get('/',function(req,res) {
  res.render('index')
})

app.listen(8000);
