$(document).ready(function(){
  var url = "/recipe" + window.location.search;
  console.log("Getting recipe from " + url);
  $.get(url, onGetRecipeInformation);
})

function onGetRecipeInformation(data, status){
  var recipe = JSON.parse(data).body;
  console.log(recipe);
  $("body").append(recipeIngredientTemplate(recipe));
}
