const express = require('express');
const path = require('path');
const request = require("request");
const api = "G7OYa72GnQpgbW7jTxEtFOOGZ3timdsl";
let category;

const app = express();


//Ger datan för en specefik kategori
function getData(category){

  request("https://api.nytimes.com/svc/books/v3/lists/current/" + category + ".json?api-key=" + api, function(error, response, body) {
    const bodyObj = JSON.parse(body);

    //Alla böcker
  //  console.log("bodyObj.results.books: " + JSON.stringify(bodyObj.results.books, null, 4));
  });
}




module.exports = {
    getHomePage: (req, res) => {
      res.render('index', {titel1:"Book For You!"});
    },
    getSecondPage: (req, res)=>{
      //Laddar in detta som default
      category = "manga";
      request("https://api.nytimes.com/svc/books/v3/lists/current/" + category + ".json?api-key=" + api, function(error, response, body) {
        const bodyObj = JSON.parse(body);
        //Alla böcker
        //console.log("bodyObj.results.books: " + JSON.stringify(bodyObj.results.books, null, 4));

        res.render('site2', {
          imageLink1: "/img/black_test.png",
          imageLink2:"/img/black_test.png",
          imageLink3:"/img/black_test.png",
          imageLink4:"/img/black_test.png",
          imageLink5:"/img/black_test.png",
          imageLink6:"/img/black_test.png",
          imageLink7:"/img/black_test.png",
          imageLink8:"/img/black_test.png",
          imageLink9:"/img/black_test.png",
          imageLink10:"/img/black_test.png",
          titel1:"default",
          titel2:"default",
          titel3:"default",
          titel4:"default",
          titel5:"default",
          titel6:"default",
          titel7:"default",
          titel8:"default",
          titel9:"default",
          titel10:"default",
          author1:"default",
          author2:"default",
          author3:"default",
          author4:"default",
          author5:"default",
          author6:"default",
          author7:"default",
          author8:"default",
          author9:"default",
          author10:"default",
          publisher1:"default" ,
          publisher2:"default",
          publisher3:"default",
          publisher4:"default",
          publisher5:"default",
          publisher6:"default",
          publisher7:"default",
          publisher8:"default",
          publisher9:"default",
          publisher10:"default",
          rank1: "default",
          rank2:"default",
          rank3:"default",
          rank4:"default",
          rank5:"default",
          rank6:"default",
          rank7:"default",
          rank8:"default",
          rank9:"default",
          rank10:"default",
          description1: "default",
          description2: "default",
          description3: "default",
          description3: "default",
          description4: "default",
          description5: "default",
          description6: "default",
          description7: "default",
          description8: "default",
          description9: "default",
          description10 :"default",
          buyLink1:"#",
          buyLink2:"#",
          buyLink3:"#",
          buyLink4:"#",
          buyLink5:"#",
          buyLink6:"#",
          buyLink7:"#",
          buyLink8:"#",
          buyLink9:"#",
          buyLink10:"#",

        });

      });
    },
    getThirdPage:(req, res)=>{
      res.render('site3');
    },
    getManga:(req, res)=>{

      //Laddar in detta som default
      category = "manga";
      request("https://api.nytimes.com/svc/books/v3/lists/current/" + category + ".json?api-key=" + api, function(error, response, body) {
        const bodyObj = JSON.parse(body);
        //Alla böcker
        //console.log("bodyObj.results.books: " + JSON.stringify(bodyObj.results.books, null, 4));

        res.render('site2', {
          imageLink1: bodyObj.results.books[0].book_image,
          imageLink2:bodyObj.results.books[1].book_image,
          imageLink3:bodyObj.results.books[2].book_image,
          imageLink4:bodyObj.results.books[3].book_image,
          imageLink5:bodyObj.results.books[4].book_image,
          imageLink6:bodyObj.results.books[5].book_image,
          imageLink7:bodyObj.results.books[6].book_image,
          imageLink8:bodyObj.results.books[7].book_image,
          imageLink9:bodyObj.results.books[8].book_image,
          imageLink10:bodyObj.results.books[9].book_image,
          titel1:bodyObj.results.books[0].title,
          titel2:bodyObj.results.books[1].title,
          titel3:bodyObj.results.books[2].title,
          titel4:bodyObj.results.books[3].title,
          titel5:bodyObj.results.books[4].title,
          titel6:bodyObj.results.books[5].title,
          titel7:bodyObj.results.books[6].title,
          titel8:bodyObj.results.books[7].title,
          titel9:bodyObj.results.books[8].title,
          titel10:bodyObj.results.books[9].title,
          author1:bodyObj.results.books[0].author,
          author2:bodyObj.results.books[1].author,
          author3:bodyObj.results.books[2].author,
          author4:bodyObj.results.books[3].author,
          author5:bodyObj.results.books[4].author,
          author6:bodyObj.results.books[5].author,
          author7:bodyObj.results.books[6].author,
          author8:bodyObj.results.books[7].author,
          author9:bodyObj.results.books[8].author,
          author10:bodyObj.results.books[9].author,
          publisher1:bodyObj.results.books[0].publisher,
          publisher2:bodyObj.results.books[1].publisher,
          publisher3:bodyObj.results.books[2].publisher,
          publisher4:bodyObj.results.books[3].publisher,
          publisher5:bodyObj.results.books[4].publisher,
          publisher6:bodyObj.results.books[5].publisher,
          publisher7:bodyObj.results.books[6].publisher,
          publisher8:bodyObj.results.books[7].publisher,
          publisher9:bodyObj.results.books[8].publisher,
          publisher10:bodyObj.results.books[9].publisher,
          rank1: bodyObj.results.books[0].rank,
          rank2:bodyObj.results.books[1].rank,
          rank3:bodyObj.results.books[2].rank,
          rank4:bodyObj.results.books[3].rank,
          rank5:bodyObj.results.books[4].rank,
          rank6:bodyObj.results.books[5].rank,
          rank7:bodyObj.results.books[6].rank,
          rank8:bodyObj.results.books[7].rank,
          rank9:bodyObj.results.books[8].rank,
          rank10:bodyObj.results.books[9].rank,
          description1: bodyObj.results.books[0].description,
          description2: bodyObj.results.books[1].description,
          description3: bodyObj.results.books[2].description,
          description4: bodyObj.results.books[3].description,
          description5: bodyObj.results.books[4].description,
          description6: bodyObj.results.books[5].description,
          description7: bodyObj.results.books[6].description,
          description8:bodyObj.results.books[7].description,
          description9: bodyObj.results.books[8].description,
          description10: bodyObj.results.books[9].description,
          buyLink1:bodyObj.results.books[0].amazon_product_url,
          buyLink2:bodyObj.results.books[1].amazon_product_url,
          buyLink3:bodyObj.results.books[2].amazon_product_url,
          buyLink4:bodyObj.results.books[3].amazon_product_url,
          buyLink5:bodyObj.results.books[4].amazon_product_url,
          buyLink6:bodyObj.results.books[5].amazon_product_url,
          buyLink7:bodyObj.results.books[6].amazon_product_url,
          buyLink8:bodyObj.results.books[7].amazon_product_url,
          buyLink9:bodyObj.results.books[8].amazon_product_url,
          buyLink10:bodyObj.results.books[9].amazon_product_url,

        });

      });

    },
    getHardcoverGraphicBooks:(req, res)=>{
      //Laddar in detta som default
      category = "hardcover-graphic-books";
      request("https://api.nytimes.com/svc/books/v3/lists/current/" + category + ".json?api-key=" + api, function(error, response, body) {
        const bodyObj = JSON.parse(body);
        //Alla böcker
        //console.log("bodyObj.results.books: " + JSON.stringify(bodyObj.results.books, null, 4));

        res.render('site2', {
          imageLink1: bodyObj.results.books[0].book_image,
          imageLink2:bodyObj.results.books[1].book_image,
          imageLink3:bodyObj.results.books[2].book_image,
          imageLink4:bodyObj.results.books[3].book_image,
          imageLink5:bodyObj.results.books[4].book_image,
          imageLink6:bodyObj.results.books[5].book_image,
          imageLink7:bodyObj.results.books[6].book_image,
          imageLink8:bodyObj.results.books[7].book_image,
          imageLink9:bodyObj.results.books[8].book_image,
          imageLink10:bodyObj.results.books[9].book_image,
          titel1:bodyObj.results.books[0].title,
          titel2:bodyObj.results.books[1].title,
          titel3:bodyObj.results.books[2].title,
          titel4:bodyObj.results.books[3].title,
          titel5:bodyObj.results.books[4].title,
          titel6:bodyObj.results.books[5].title,
          titel7:bodyObj.results.books[6].title,
          titel8:bodyObj.results.books[7].title,
          titel9:bodyObj.results.books[8].title,
          titel10:bodyObj.results.books[9].title,
          author1:bodyObj.results.books[0].author,
          author2:bodyObj.results.books[1].author,
          author3:bodyObj.results.books[2].author,
          author4:bodyObj.results.books[3].author,
          author5:bodyObj.results.books[4].author,
          author6:bodyObj.results.books[5].author,
          author7:bodyObj.results.books[6].author,
          author8:bodyObj.results.books[7].author,
          author9:bodyObj.results.books[8].author,
          author10:bodyObj.results.books[9].author,
          publisher1:bodyObj.results.books[0].publisher,
          publisher2:bodyObj.results.books[1].publisher,
          publisher3:bodyObj.results.books[2].publisher,
          publisher4:bodyObj.results.books[3].publisher,
          publisher5:bodyObj.results.books[4].publisher,
          publisher6:bodyObj.results.books[5].publisher,
          publisher7:bodyObj.results.books[6].publisher,
          publisher8:bodyObj.results.books[7].publisher,
          publisher9:bodyObj.results.books[8].publisher,
          publisher10:bodyObj.results.books[9].publisher,
          rank1: bodyObj.results.books[0].rank,
          rank2:bodyObj.results.books[1].rank,
          rank3:bodyObj.results.books[2].rank,
          rank4:bodyObj.results.books[3].rank,
          rank5:bodyObj.results.books[4].rank,
          rank6:bodyObj.results.books[5].rank,
          rank7:bodyObj.results.books[6].rank,
          rank8:bodyObj.results.books[7].rank,
          rank9:bodyObj.results.books[8].rank,
          rank10:bodyObj.results.books[9].rank,
          description1: bodyObj.results.books[0].description,
          description2: bodyObj.results.books[1].description,
          description3: bodyObj.results.books[2].description,
          description4: bodyObj.results.books[3].description,
          description5: bodyObj.results.books[4].description,
          description6: bodyObj.results.books[5].description,
          description7: bodyObj.results.books[6].description,
          description8:bodyObj.results.books[7].description,
          description9: bodyObj.results.books[8].description,
          description10: bodyObj.results.books[9].description,
          buyLink1:bodyObj.results.books[0].amazon_product_url,
          buyLink2:bodyObj.results.books[1].amazon_product_url,
          buyLink3:bodyObj.results.books[2].amazon_product_url,
          buyLink4:bodyObj.results.books[3].amazon_product_url,
          buyLink5:bodyObj.results.books[4].amazon_product_url,
          buyLink6:bodyObj.results.books[5].amazon_product_url,
          buyLink7:bodyObj.results.books[6].amazon_product_url,
          buyLink8:bodyObj.results.books[7].amazon_product_url,
          buyLink9:bodyObj.results.books[8].amazon_product_url,
          buyLink10:bodyObj.results.books[9].amazon_product_url,

        });

      });

    },
    getHardcoverNonfiction:(req, res)=>{
      //Laddar in detta som default
      category = "hardcover-nonfiction";
      request("https://api.nytimes.com/svc/books/v3/lists/current/" + category + ".json?api-key=" + api, function(error, response, body) {
        const bodyObj = JSON.parse(body);
        //Alla böcker
        //console.log("bodyObj.results.books: " + JSON.stringify(bodyObj.results.books, null, 4));

        res.render('site2', {
          imageLink1: bodyObj.results.books[0].book_image,
          imageLink2:bodyObj.results.books[1].book_image,
          imageLink3:bodyObj.results.books[2].book_image,
          imageLink4:bodyObj.results.books[3].book_image,
          imageLink5:bodyObj.results.books[4].book_image,
          imageLink6:bodyObj.results.books[5].book_image,
          imageLink7:bodyObj.results.books[6].book_image,
          imageLink8:bodyObj.results.books[7].book_image,
          imageLink9:bodyObj.results.books[8].book_image,
          imageLink10:bodyObj.results.books[9].book_image,
          titel1:bodyObj.results.books[0].title,
          titel2:bodyObj.results.books[1].title,
          titel3:bodyObj.results.books[2].title,
          titel4:bodyObj.results.books[3].title,
          titel5:bodyObj.results.books[4].title,
          titel6:bodyObj.results.books[5].title,
          titel7:bodyObj.results.books[6].title,
          titel8:bodyObj.results.books[7].title,
          titel9:bodyObj.results.books[8].title,
          titel10:bodyObj.results.books[9].title,
          author1:bodyObj.results.books[0].author,
          author2:bodyObj.results.books[1].author,
          author3:bodyObj.results.books[2].author,
          author4:bodyObj.results.books[3].author,
          author5:bodyObj.results.books[4].author,
          author6:bodyObj.results.books[5].author,
          author7:bodyObj.results.books[6].author,
          author8:bodyObj.results.books[7].author,
          author9:bodyObj.results.books[8].author,
          author10:bodyObj.results.books[9].author,
          publisher1:bodyObj.results.books[0].publisher,
          publisher2:bodyObj.results.books[1].publisher,
          publisher3:bodyObj.results.books[2].publisher,
          publisher4:bodyObj.results.books[3].publisher,
          publisher5:bodyObj.results.books[4].publisher,
          publisher6:bodyObj.results.books[5].publisher,
          publisher7:bodyObj.results.books[6].publisher,
          publisher8:bodyObj.results.books[7].publisher,
          publisher9:bodyObj.results.books[8].publisher,
          publisher10:bodyObj.results.books[9].publisher,
          rank1: bodyObj.results.books[0].rank,
          rank2:bodyObj.results.books[1].rank,
          rank3:bodyObj.results.books[2].rank,
          rank4:bodyObj.results.books[3].rank,
          rank5:bodyObj.results.books[4].rank,
          rank6:bodyObj.results.books[5].rank,
          rank7:bodyObj.results.books[6].rank,
          rank8:bodyObj.results.books[7].rank,
          rank9:bodyObj.results.books[8].rank,
          rank10:bodyObj.results.books[9].rank,
          description1: bodyObj.results.books[0].description,
          description2: bodyObj.results.books[1].description,
          description3: bodyObj.results.books[2].description,
          description4: bodyObj.results.books[3].description,
          description5: bodyObj.results.books[4].description,
          description6: bodyObj.results.books[5].description,
          description7: bodyObj.results.books[6].description,
          description8:bodyObj.results.books[7].description,
          description9: bodyObj.results.books[8].description,
          description10: bodyObj.results.books[9].description,
          buyLink1:bodyObj.results.books[0].amazon_product_url,
          buyLink2:bodyObj.results.books[1].amazon_product_url,
          buyLink3:bodyObj.results.books[2].amazon_product_url,
          buyLink4:bodyObj.results.books[3].amazon_product_url,
          buyLink5:bodyObj.results.books[4].amazon_product_url,
          buyLink6:bodyObj.results.books[5].amazon_product_url,
          buyLink7:bodyObj.results.books[6].amazon_product_url,
          buyLink8:bodyObj.results.books[7].amazon_product_url,
          buyLink9:bodyObj.results.books[8].amazon_product_url,
          buyLink10:bodyObj.results.books[9].amazon_product_url,

        });

      });
    },
    getBusiness:(req, res)=>{
      //Laddar in detta som default
      category = "business-books";
      request("https://api.nytimes.com/svc/books/v3/lists/current/" + category + ".json?api-key=" + api, function(error, response, body) {
        const bodyObj = JSON.parse(body);
        //Alla böcker
        //console.log("bodyObj.results.books: " + JSON.stringify(bodyObj.results.books, null, 4));

        res.render('site2', {
          imageLink1: bodyObj.results.books[0].book_image,
          imageLink2:bodyObj.results.books[1].book_image,
          imageLink3:bodyObj.results.books[2].book_image,
          imageLink4:bodyObj.results.books[3].book_image,
          imageLink5:bodyObj.results.books[4].book_image,
          imageLink6:bodyObj.results.books[5].book_image,
          imageLink7:bodyObj.results.books[6].book_image,
          imageLink8:bodyObj.results.books[7].book_image,
          imageLink9:bodyObj.results.books[8].book_image,
          imageLink10:bodyObj.results.books[9].book_image,
          titel1:bodyObj.results.books[0].title,
          titel2:bodyObj.results.books[1].title,
          titel3:bodyObj.results.books[2].title,
          titel4:bodyObj.results.books[3].title,
          titel5:bodyObj.results.books[4].title,
          titel6:bodyObj.results.books[5].title,
          titel7:bodyObj.results.books[6].title,
          titel8:bodyObj.results.books[7].title,
          titel9:bodyObj.results.books[8].title,
          titel10:bodyObj.results.books[9].title,
          author1:bodyObj.results.books[0].author,
          author2:bodyObj.results.books[1].author,
          author3:bodyObj.results.books[2].author,
          author4:bodyObj.results.books[3].author,
          author5:bodyObj.results.books[4].author,
          author6:bodyObj.results.books[5].author,
          author7:bodyObj.results.books[6].author,
          author8:bodyObj.results.books[7].author,
          author9:bodyObj.results.books[8].author,
          author10:bodyObj.results.books[9].author,
          publisher1:bodyObj.results.books[0].publisher,
          publisher2:bodyObj.results.books[1].publisher,
          publisher3:bodyObj.results.books[2].publisher,
          publisher4:bodyObj.results.books[3].publisher,
          publisher5:bodyObj.results.books[4].publisher,
          publisher6:bodyObj.results.books[5].publisher,
          publisher7:bodyObj.results.books[6].publisher,
          publisher8:bodyObj.results.books[7].publisher,
          publisher9:bodyObj.results.books[8].publisher,
          publisher10:bodyObj.results.books[9].publisher,
          rank1: bodyObj.results.books[0].rank,
          rank2:bodyObj.results.books[1].rank,
          rank3:bodyObj.results.books[2].rank,
          rank4:bodyObj.results.books[3].rank,
          rank5:bodyObj.results.books[4].rank,
          rank6:bodyObj.results.books[5].rank,
          rank7:bodyObj.results.books[6].rank,
          rank8:bodyObj.results.books[7].rank,
          rank9:bodyObj.results.books[8].rank,
          rank10:bodyObj.results.books[9].rank,
          description1: bodyObj.results.books[0].description,
          description2: bodyObj.results.books[1].description,
          description3: bodyObj.results.books[2].description,
          description4: bodyObj.results.books[3].description,
          description5: bodyObj.results.books[4].description,
          description6: bodyObj.results.books[5].description,
          description7: bodyObj.results.books[6].description,
          description8:bodyObj.results.books[7].description,
          description9: bodyObj.results.books[8].description,
          description10: bodyObj.results.books[9].description,
          buyLink1:bodyObj.results.books[0].amazon_product_url,
          buyLink2:bodyObj.results.books[1].amazon_product_url,
          buyLink3:bodyObj.results.books[2].amazon_product_url,
          buyLink4:bodyObj.results.books[3].amazon_product_url,
          buyLink5:bodyObj.results.books[4].amazon_product_url,
          buyLink6:bodyObj.results.books[5].amazon_product_url,
          buyLink7:bodyObj.results.books[6].amazon_product_url,
          buyLink8:bodyObj.results.books[7].amazon_product_url,
          buyLink9:bodyObj.results.books[8].amazon_product_url,
          buyLink10:bodyObj.results.books[9].amazon_product_url,

        });

      });
    }
};
