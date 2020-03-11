const express = require('express');
const request = require("request");
const app = express()
const api = "G7OYa72GnQpgbW7jTxEtFOOGZ3timdsl";

console.log("Program started");


request("https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=" + api, function(error, response, body) {
  //console.log(body);
  const bodyObj = JSON.parse(body);

  //Hela body
  console.log("---------------------------------------------------------------------------------")
  console.log(bodyObj);

  //Alla böcker
  console.log("---------------------------------------------------------------------------------")
  console.log("bodyObj.results.books: " + JSON.stringify(bodyObj.results.books, null, 4));

  //Bok nummer ett
  console.log("---------------------------------------------------------------------------------")
  console.log("bodyObj.results.books[0]: " + JSON.stringify(bodyObj.results.books[0], null, 4));
});
