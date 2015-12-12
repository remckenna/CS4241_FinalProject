var FOOD_API_KEY = "EotHMRBHi3msh6sjePR5ceWpps8Sp1HFYaVjsnmO6u9I28SvSc";
var foodServicePath = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/"
var express = require("express");
var path = require("path");
var unirest = require("unirest");

var app = express();
var port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, "/path")));

app.get("/", serveIndex);

app.get("/testFoodSearch", testOnFoodSearch);

app.listen(port, function(){
  console.log("App listening on port " + port);
});

function serveIndex(req, res){
  res.sendFile(path.join(__dirname, "public/index.html"));
}

function testOnFoodSearch(req, res){
  unirest.get(foodServicePath + "recipes/search?cuisine=italian&diet=vegetarian&excludeIngredients=coconut&intolerances=egg%2C+gluten&number=10&offset=0&query=burger&type=main+course")
  .header("X-Mashape-Key", FOOD_API_KEY)
  .end(function(result){
  console.log(result.status, result.headers, result.body);
  serveIndex(req,res);
  });
};
