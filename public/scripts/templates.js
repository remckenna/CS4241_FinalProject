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
    "<a class='header-nav-btn' href='/addUser'> Sign Up</a>" +
    "<a class='header-nav-btn' href='/logUser'> Log In</a>" +
  "</div>"
);

// var footerTemplate = _.template (
// );

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
