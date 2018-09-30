var path = require('path');
var express = require('express');
var port = process.env.PORT || 3000;
var app = express();

var publicPath = path.join(__dirname,"../public");

app.use(express.static(publicPath));
console.log(publicPath);
// app.get('/', (req, res) => {
//   res.render('index.html');
// });
app.listen(port,() => {
  console.log("Server started");
});
