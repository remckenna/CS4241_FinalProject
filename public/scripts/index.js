$(document).ready(function(){
  var userCookie = getCookie("user");
  console.log(userCookie != "");

  if(userCookie != "" ){
    // If user has a cookie w/ an ID
    // window.location.pathname = "/userPage.html";
    $("#page-header").append(headerActiveTemplate());
    showForm(false);
  } else {
    // Otherwise
    $("#page-header").append(headerInactiveTemplate());

    // var loginHandler = bind(showLogin, this);
    // var signupHandler = bind(showSignup, this);

    $("#btn-login").click(showLogin);
    $("#btn-signup").click(showSignup);
    showForm(false);
  }
  // Add dynamic footer to page
  //$("#page-footer").append(footerTemplate());
})

function showLogin() {
  console.log("LOGIN");
  showForm(true);
  updateForm(true);
}

function showSignup() {
  console.log("SIGNUP");
  showForm(true);
  updateForm(false);
}

function showForm(newState) {
  if (newState) {
    // Show form / hide info
    $("#page-form").show();
    $("#page-info").hide();
  } else {
    // Hide form / show info
    $("#page-form").hide();
    $("#page-info").show();
  }
}

function updateForm(newState) {
  if (newState) {
    // Show login / hide signup
    $("#form-login").show();
    $("#form-signup").hide();
    $("#form-text").text("Login");
  } else {
    // Hide login / show signup
    $("#form-login").hide();
    $("#form-signup").show();
    $("#form-text").text("Sign Up");
  }
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
