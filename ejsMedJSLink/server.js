const path = require('path');
const bodyParser = require('body-parser')
const express = require('express')
const logger = require('morgan')
const errorhandler = require('errorhandler')
app = express();


//Viewengine
app.set('view engine', 'ejs');

//Middlewear
app.use(logger('dev'));
app.use(errorhandler());

//Static public fil
app.use(express.static(__dirname + '/public'));

//Kolla upp hur man länkar external javascript till index.ejs filen, eftersom just nu fungerar det intes
//Fixa middlewear logger!

app.get('/', function(req, res){
  console.log("Server running on port: 3000");
  res.render('index', {titel1:"Hello"});
});
app.listen(3000);
