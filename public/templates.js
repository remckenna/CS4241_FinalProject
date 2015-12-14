var recipeSearchResultTemplate = _.template(
  "<div class='recipeSearchResult'>"+
    "<h3 class='recipeResultTitle'><%=title%></h3>"+
    "<p class='cookingTime>Ready in <%=readyInMinutes%> minutes</p>"+
  "</div>"
);
