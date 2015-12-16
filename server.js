/* server.js
 * CS 4241 - Webware
 * Final Project
 * Students: Robert McKenna / Lucas Ruiz Lebrao
 * Title: Quick Food Parser
 * Description: something
 */

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var HashMap = require("hashmap");

var app = express();

var db = require("./database.js")
var defaultuser = {
  name: "user",
  recipes: [],
}
db.map.set("pass", defaultuser); // TEMP test user

app.use(bodyParser.urlencoded({ extended: true }));

//=============== EXPRESS =================
app.use(express.static(path.join(__dirname, "/public")));

//=============== ROUTES =================
app.get("/", serveIndex);

app.post("/loginRequest", verifyLogin);

function verifyLogin(req, res) {
  console.log("Login Request: User: " + req.body.username + " Pass: " + req.body.password);
  if (matchIndex(req.body.username,req.body.password)) {
    console.log("Successful Login");
  } else {
    console.log("User/Pass mistmatch");
  }
}

app.post("/addUser", addUser);

function addUser(req, res) {
  console.log("Add User Request: User: " + req.body.newusername + " Pass: " + req.body.newpassword);
  var match = false;
  db.map.forEach(function(value, key) {
        console.log(key + " : " + value);
        if (value === req.body.newusername) match = true;
    });

  if (match) {
    console.log("User already exists");
  } else {
    console.log("New user added!");
  }
}


function matchIndex(user, key) {
  var obj = db.map.get(key);
  console.log("Hash Output: " + obj.name);
  return user === obj.name;
}

function serveIndex(req, res){
  res.sendFile(path.join(__dirname, "public/index.html"));
}

//=============== PORT =================
var port = process.env.PORT || 8080;
app.listen(port, function(){
  console.log("App listening on port " + port);
});
