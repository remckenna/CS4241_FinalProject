$(document).ready(function(){
  var url = "/search"+window.location.search;
  console.log("Search sent");
  $.get(url, onSearchFormResults);
  $("#page-header").append(headerActiveTemplate());
})

function onSearchFormResults(data, status){
    var searchResults = JSON.parse(data);
    console.log(searchResults);
    $("#searchResultDiv").empty();
    searchResults.results.forEach(function(el){
      $("#searchResultDiv").append(recipeSearchResultTemplate(el));
    })
}
