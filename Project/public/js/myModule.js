const express = require('express');
const path = require('path');
const app = express();


module.exports = {
    getHomePage: (req, res) => {
      res.render('index', {titel1:"Hello"});
      //es.render(path.join(__dirname, '../html/index.ejs'),{titel1:"Nu är du inne"});
  //  res.end("Hello");
    },
    getSecondPage: (req, res)=>{
      res.render('site2');
    }
};
