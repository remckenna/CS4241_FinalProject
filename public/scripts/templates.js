var headerActiveTemplate = _.template (
  "<a id='header-logo' href='/'> needToFood </a>" +
  "<div id='header-leftnav'>" +
    "<ul id='header-right' role='navigation'>" +
      "<li class='header-nav-item'> <a href='/searchTestingPage.html'> Search</a> </li>" +
    "</ul>" +
  "</div>" +
  "<div id='header-rightnav'>" +
    "<a class='header-nav-btn' href='/userpage.html'> Profile</a>" +
    "<a class='header-nav-btn' href='/logout'> Log Out</a>" +
  "</div>"
);

var headerInactiveTemplate = _.template (
  "<a id='header-logo' href='/'> needToFood </a>" +
  "<div id='header-leftnav'>" +
    "<ul id='header-right' role='navigation'>" +
      "<li class='header-nav-item'> <a href='/searchTestingPage.html'> Search</a> </li>" +
    "</ul>" +
  "</div>" +
  "<div id='header-rightnav'>" +
    "<a id='btn-signup' class='header-nav-btn' > Sign Up</a>" +
    "<a id='btn-login'  class='header-nav-btn' > Log In</a>" +
  "</div>"
);

// var footerTemplate = _.template (
// );

var userInfoTemplate = _.template(
  "<div>" +
  "<h2> <%= userName %> </h2>" +
  "<h3> Password: <%= password %> </h3>" +
  "<h3> Recipes stored: <%= ingredientLists.length %> </h3>" +
  "</div>"
);

var recipeSearchResultTemplate = _.template(
  "<a class= 'recipeSearchResultLink' href='/recipe.html?id=<%=id%>'>"+
    "<div class='recipeSearchResult' data-recipeID='<%=id%>'>"+
      "<div class='recipeImageContainer'>"+
        "<img src=https://spoonacular.com/recipeImages/<%=imageUrls[0]%>></img>"+
      "</div>"+
      "<h2 class='recipeTitle'><%=title%></h2>"+
      "<p class='cookingTime'> Ready in <%=readyInMinutes%> minutes</p>"+
    "</div>"+
    "</a>"
);

var recipeIngredientTemplate = _.template(
  "<div class='recipeIngredients'>"+
    "<h2 class='recipeTitle'><%=title%></h2>"+
    "<img src=https://spoonacular.com/recipeImages/<%=imageUrls[0]%>></img>"+
    "<h3>Ingredients</h3>"+
    "<ul>"+
      "<% _.each(extendedIngredients, function(el, index, list){ %>"+
         "<li><%=el.name%></li>"+
       "<% }); %>"+
    "</ul>"+
    "<p>Detailed instructions can be found at <a href='<%=sourceUrl%>'><%=sourceName%></a></p>"+
  "</div>"
);
