function onSearchFormSubmit(){
  var url = "/search?recipe="+document.getElementById("recipeTextBox").value;
  var searchReq = new XMLHttpRequest();
  searchReq.onreadystatechange = function(){
    onSearchFormResults(searchReq);
  }
  console.log("Get request to "+url);
  searchReq.open("GET", url, true);
  searchReq.send();
}

$(document).ready(function(){
  $("#recipeSubmitButton").click(function(){
    var url = "/search?recipe="+$("#recipeTextBox").value;
    console.log("Search sent");
    $.get(url, onSearchFormResults);
  })
})

function onSearchFormResults(data, status){
    var searchResults = JSON.parse(data);
    console.log(searchResults);
    $("#searchResultDiv").empty();
    searchResults.results.forEach(function(el){
      $("#searchResultDiv").append(recipeSearchResultTemplate(el));
    })
}
