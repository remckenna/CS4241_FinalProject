
/** userpage.js
  * CS 4241 - Webware
  * Final Project
  * Students: Robert McKenna / Lucas Ruiz Lebrao
  * Title: Quick Food Parser
  * Description: something
  */

$(document).ready(function(){
  url = "/userinfo";
  $.get(url, addUserInfo);

})

function addUserInfo(data, status){
  var user = JSON.parse(data);
  //console.log(user.ingredientLists[0]);
  _.each(user.ingredientLists, function(el){
    $("body").append(recipeSearchResultTemplate(el));
  });
}
