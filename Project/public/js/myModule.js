const express = require('express');
const path = require('path');

const app = express();

app.use('/static', express.static('public'))



module.exports = {
    getHomePage: (req, res) => {
      res.render(path.join(__dirname, '../html/index.ejs'),{titel1:"Nu är du inne"});
  //  res.end("Hello");
    }
};
