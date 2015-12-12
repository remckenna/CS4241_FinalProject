var express = require("express");
var path = require("path");

var app = express();
var port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, "/path")));

app.get("/", serveIndex);

app.listen(port, function(){
  console.log("App listening on port " + port);
});

function serveIndex(req, res){
  res.sendFile(path.join(__dirname, "public/index.html"));
}
