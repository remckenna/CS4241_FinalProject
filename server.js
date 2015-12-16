var FOOD_API_KEY = "EotHMRBHi3msh6sjePR5ceWpps8Sp1HFYaVjsnmO6u9I28SvSc";
var foodServicePath = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/"
var defaultCuisineQuery = "african%2Cchinese%2Cjapanese%2Ckorean%2Cvietnamese%2Cthai%2Cindian%2Cbritish%2Cirish%2Cfrench%2Citalian%2Cmexican%2Cspanish%2Cmiddle+eastern%2Cjewish%2Camerican%2Ccajun%2Csouthern%2Cgreek%2Cgerman%2Cnodic%2Ceastern+european%2Ccaribbean%2Clatin";
var defaultDietQuery = "pescetarian";
var defaultResultCount = "10";

var express = require("express");
var path = require("path");
var unirest = require("unirest");
var url = require("url");
var fs = require("fs");

var app = express();
var port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, "/public")));

app.get("/", serveIndex);

app.get("/search", handleSearch);

app.get("/recipe", getRecipe);

app.listen(port, function(){
  console.log("App listening on port " + port);
});

function serveIndex(req, res){
  res.sendFile(path.join(__dirname, "public/index.html"));
}

function getRecipe(req, res){
  var searchQuery = url.parse(req.url, true).query;
  console.log("Requested recipe for ID: " + searchQuery.id);
  unirest.get(foodServicePath + "/recipes/" + searchQuery.id + "/information")
  .header("X-Mashape-Key", FOOD_API_KEY)
  .end(function(result){
    res.send(JSON.stringify(result));
  })
  //res.send();
}


function handleSearch(req, res){
  var searchQuery = url.parse(req.url, true).query;
  console.log("Food Search Query: "+searchQuery.recipe);
  //Don't use the search food function for testing as it will us up our limited api calls.
//  searchFood(searchQuery.recipe, function(searchResults){
  //  res.send(JSON.stringify(searchResults));
  //})
   res.send(getPlacholderData("placeHolderREcipeSearchResults.json"));
}

function searchFood(recipe, callback){
  unirest.get(foodServicePath + "recipes/search?number="+ defaultResultCount +"&query="+recipe)
  .header("X-Mashape-Key", FOOD_API_KEY)
  .end(function(result){
    console.log(result.body);
    callback(result.body);
  });
}

function testOnFoodSearch(req, res){
  unirest.get(foodServicePath + "recipes/search?cuisine=italian&diet=vegetarian&excludeIngredients=coconut&intolerances=egg%2C+gluten&number=10&offset=0&query=burger&type=main+course")
  .header("X-Mashape-Key", FOOD_API_KEY)
  .end(function(result){
  console.log(result.status, result.headers, result.body);
  serveIndex(req,res);
  });
};

function getPlacholderData(filename){
  return fs.readFileSync(filename);
}
