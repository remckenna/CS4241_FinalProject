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
         "<li class='recipeIngredientli'><b><%=el.amount%></b> <%= el.unit%> <%=el.name%></li>"+
       "<% }); %>"+
    "</ul>"+
    "<p>Detailed instructions can be found at <a href='<%=sourceUrl%>'><%=sourceName%></a></p>"+
  "</div>"
);
