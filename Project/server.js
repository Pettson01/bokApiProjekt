const path = require('path');
const bodyParser = require('body-parser')
const express = require('express')
const logger = require('morgan')
const errorhandler = require('errorhandler')
const port = 3000;
const app = express();

//Glöm inte att lägga till:
//https://developer.nytimes.com/branding

app.set('view engine', 'ejs');

//Middlewear
//app.use(bodyParser.json());
app.use(logger('dev'));
app.use(errorhandler());

app.use(express.static(__dirname + '/public'));

//All kod som liiger i en separat fil
const {getHomePage} = require('./public/js/myModule.js');
const {getSecondPage} = require('./public/js/myModule.js');
const {getThirdPage} = require('./public/js/myModule.js');
const {getManga} = require('./public/js/myModule.js');
const {getHardcoverGraphicBooks} = require('./public/js/myModule.js');
const {getHardcoverNonfiction} = require('./public/js/myModule.js');
const {getBusiness} = require('./public/js/myModule.js');

//Olika "path:s"
app.get('/', getHomePage);
app.get('/secondPage', getSecondPage);
app.get('/thirdPage', getThirdPage);
app.get('/getManga', getManga);
app.get('/getHardcoverGraphicBooks', getHardcoverGraphicBooks)
app.get('/getHardcoverNonfiction', getHardcoverNonfiction)
app.get('/getBusiness', getBusiness);

console.log("Server running on port: " + port);
app.listen(port);
