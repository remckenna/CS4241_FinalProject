$(document).ready(function(){
  var userCookie = getCookie("user");
  console.log(userCookie != "");

  if(userCookie != "" ){
    // If user has a cookie w/ an ID
    // window.location.pathname = "/userPage.html";
    $("#page-header").append(headerActiveTemplate());
  } else {
    // Otherwise
    $("#page-header").append(headerInactiveTemplate());
  }
  // Add dynamic footer to page
  //$("#page-footer").append(footerTemplate());
})

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
