const express = require('../node_modules/express');
const bodyParser = require('../node_modules/body-parser');
const fileUpload = require('../node_modules/express-fileupload');

const path = require('path');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(fileUpload());

app.get('/',(req,res)=>{
	res.sendFile(path.join(__dirname,'index.html'));
});

app.post('/login',(req,res)=>{
	console.log(req.body);
	console.log(req.files);
	res.send("Login Information Received.");
});

app.listen(8080)