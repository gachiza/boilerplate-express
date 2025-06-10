let express = require('express');
let path = require('path');
let app = express();
require('dotenv').config();

const absolutePath = path.join(__dirname, 'views', 'index.html');

const publicPath = path.join( __dirname, 'public'
);
app.get("/" , (req , res) => {
  res.sendFile(absolutePath);

});

app.use('/public',express.static(publicPath));

app.get('/json', (req,res) => {
  const messageStyle = process.env.MESSAGE_STYLE;
  let message = "Hello json"
  if (messageStyle === 'uppercase') {
    message = message.toUpperCase();
  }
  res.json({message: message});
}); 




































 module.exports = app;
