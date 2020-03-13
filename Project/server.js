//Moduler
const express = require('express')
const logger = require('morgan')
const errorhandler = require('errorhandler')
const bodyParser = require('body-parser')
const path = require('path')

const app = express();

//Glöm inte att lägga till:
//https://developer.nytimes.com/branding



//Middlewear
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(errorhandler());

const {getHomePage} = require('./public/js/myModule.js');


//--------------------------------------
//Här ska koden för API och DB ligga





//------------------------------------

//Gör filsökvägen lättare att använda

//Olika "path:s"
app.get('/', getHomePage);

app.listen(3000);
