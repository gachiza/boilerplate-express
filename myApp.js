let express = require('express');
let path = require('path')
let app = express();


const absolutePath = path.join(__dirname, 'views', 'index.html');

const publicPath = path.join( __dirname, 'public'
);
app.get("/" , (req , res) => {
  res.sendFile(absolutePath);

});

app.use('/public',express.static(publicPath));

app.get('/json', (req,res) => {
  res.json({"message": "Hello json"});
}); 




































 module.exports = app;
