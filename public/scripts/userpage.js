
/** userpage.js
  * CS 4241 - Webware
  * Final Project
  * Students: Robert McKenna / Lucas Ruiz Lebrao
  * Title: Quick Food Parser
  * Description: something
  */

$(document).ready(function(){
  var userCookie = getCookie("user");

  // Load page using templates
  // Get Header
  if(userCookie != "" ){
    // If user has a cookie w/ an ID
    // window.location.pathname = "/userPage.html";
    $("#page-header").append(headerActiveTemplate());
  } else {
    console.log("userpage.js ERR: No user cookie available!");
    // TODO Redirect to login page
  }
  // Get Footer
  // TODO Add dynamic footer to page
  //$("#page-footer").append(footerTemplate());

  // Build body using template
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

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
}
