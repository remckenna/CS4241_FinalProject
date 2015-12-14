var recipeSearchResultTemplate = _.template(
  "<div class='recipeSearchResult'>"+
    "<div class='recipeResultImage'>"+
      "<img src=https://spoonacular.com/recipeImages/<%=imageUrls[0]%>></img>"+
    "</div>"+
    "<h3 class='recipeResultTitle'><%=title%></h3>"+
    "<p class='cookingTime'> Ready in <%=readyInMinutes%> minutes</p>"+
  "</div>"
);
