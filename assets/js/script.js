// Global Varibles
var apiKey = "636459deadfe82e42a5d3a5699ce8a6c";
var searchHistoryList = [];

// Fetch MovieDB API
fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=636459deadfe82e42a5d3a5699ce8a6c&language=en-US&page=1&region=US")
.then(function(response){return response.json()})
.then(function(data){console.log(data)})


// localStorage
localStorage.setItem("movie", JSON.stringify(searchHistoryList));
    console.log(searchHistoryList);