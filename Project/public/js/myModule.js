const express = require('express');
const path = require('path');
const request = require("request");
const api = "G7OYa72GnQpgbW7jTxEtFOOGZ3timdsl";

const app = express();
let returnObject;

//Ger datan för en specefik kategori
function getData(category){

  request("https://api.nytimes.com/svc/books/v3/lists/current/" + category + ".json?api-key=" + api, function(error, response, body) {
    const bodyObj = JSON.parse(body);

    let bookObject = new Object();

    for (var i = 0; i < bodyObj.results.books.length; i++) {
      bookObject[i] = bodyObj.results.books[i];
    };

    returnObject = bookObject;
    global.returnObject = returnObject;


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
      //Skiten är undefined, fixa en global variabel som jag gjorde i Jul Uppgiften
      getData("manga");

      console.log("Getting Manga!");

      console.log("Manga titel: " + returnObject[0].title);
    }
};
