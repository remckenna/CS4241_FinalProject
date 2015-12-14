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

function onSearchFormResults(searchReq){
  if(searchReq.status == 200 && searchReq.readyState == 4){
    var searchResults = JSON.parse(searchReq.responseText);
    var resultsParent = document.getElementById("searchResultDiv");
    console.log(searchResults);
    resultsParent.innerHTML ="";
    searchResults.results.forEach(function(el){
      resultsParent.innerHTML += recipeSearchResultTemplate(el);
    })

  }
}
