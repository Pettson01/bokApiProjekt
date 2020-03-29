const path = require('path');
const bodyParser = require('body-parser')
const express = require('express')
const logger = require('morgan')
const errorhandler = require('errorhandler')
const port = 3000;
app = express();

//Glöm inte att lägga till:
//https://developer.nytimes.com/branding

app.set('view engine', 'ejs');

//Middlewear
//app.use(bodyParser.json());
app.use(logger('dev'));
app.use(errorhandler());

app.use(express.static(__dirname + '/public'));

const {getHomePage} = require('./public/js/myModule.js');
const {getSecondPage} = require('./public/js/myModule.js');
const {getThirdPage} = require('./public/js/myModule.js');
const {getManga} = require('./public/js/myModule.js');

//Olika "path:s"
app.get('/', getHomePage);
app.get('/secondPage', getSecondPage);
app.get('/thirdPage', getThirdPage);
app.get('/getManga', getManga);
console.log("Server running on port: " + port);
app.listen(port);
