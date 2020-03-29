const express = require('express');
const path = require('path');
const request = require("request");
const api = "G7OYa72GnQpgbW7jTxEtFOOGZ3timdsl";

const app = express();
let a = new Object();

//Ger datan för en specefik kategori
function getData(category){

  request("https://api.nytimes.com/svc/books/v3/lists/current/" + category + ".json?api-key=" + api, function(error, response, body) {
    const bodyObj = JSON.parse(body);

    let bookObject = new Object();

    for (var i = 0; i < bodyObj.results.books.length; i++) {
      bookObject[i] = bodyObj.results.books[i];
    };

    a = bookObject;

    //console.log(a);
  });
}

module.exports = {
    getHomePage: (req, res) => {
      res.render('index', {titel1:"Book For You!"});
    },
    getSecondPage: (req, res)=>{
      res.render('site2');
    },
    getThirdPage:(req, res)=>{
      res.render('site3');
    },
    getManga:(req, res)=>{
      getData("manga");
      
    }
};
