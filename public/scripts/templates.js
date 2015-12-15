var recipeSearchResultTemplate = _.template(
  "<a href='/recipe.html?id=<%=id%>'>"+
    "<div class='recipeSearchResult' data-recipeID='<%=id%>'>"+
      "<div class='recipeImage'>"+
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

  "</div>"
);
