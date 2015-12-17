$(document).ready(function(){
  var url = "/recipe" + window.location.search;
  console.log("Getting recipe from " + url);
  $.get(url, onGetRecipeInformation);
  $("#btAddRecipeToUser").click(onAddRecipe);
  $("#page-header").append(headerActiveTemplate());
})

function onGetRecipeInformation(data, status){
  var recipe = JSON.parse(data).body;
  console.log(recipe);
  $("#recipeInfoContainer").append(recipeIngredientTemplate(recipe));
  // TODO Add to local storage
  window.localStorage.setItem('recipe', JSON.stringify(recipe));
}

function onAddRecipe(){
  $.post("/addRecipe", JSON.parse(localStorage.getItem("recipe")));
  $(this).hide();

}
