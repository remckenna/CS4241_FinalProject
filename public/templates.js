var recipeSearchResultTemplate = _.template(
  "<div class='recipeSearchResult'>"+
    "<h3 class='recipeResultTitle'><%=title%></h3>"+
    "<img class='recipeResultImage' src=https://spoonacular.com/recipeImages/<%=imageUrls[0]%>></img>"+
    "<p class='cookingTime>Ready in <%=readyInMinutes%> minutes</p>"+
  "</div>"
);
