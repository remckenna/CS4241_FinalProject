$(document).ready(function(){
  var url = "/recipe" + window.location.search;
  console.log("Getting recipe from " + url);
  $.get(url, onGetRecipeInformation);
})

function onGetRecipeInformation(data, status){
  console.log(data);
  $("body").append(recipeIngredientTemplate(data.body));
}
