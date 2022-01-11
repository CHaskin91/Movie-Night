//TMDB
// Global Variables
var apiKey = "636459deadfe82e42a5d3a5699ce8a6c";
var searchHistoryList = [];

// Fetch MovieDB API
fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=636459deadfe82e42a5d3a5699ce8a6c&language=en-US&page=1&region=US")
.then(function(response){return response.json()})
.then(function(data){console.log(data)})


// Event Listener for Search Button
$("#searchBtn").on("click", function(event) {
    event.preventDefault();

    var city = $("#enterCity").val().trim();
    currentCondition(city);
        if (!searchHistoryList.includes(city)) {
            searchHistoryList.push(city);
            var searchedCity = $(`<li class="list-group-item">${city}</li>`);
            $("#searchHistory").append(searchedCity);
        };

        // localStorage
        localStorage.setItem("city", JSON.stringify(searchHistoryList));
        console.log(searchHistoryList);
});

// Search History
$(document).on("click", ".list-group-item", function() {
    var listCity = $(this).text();
    currentCondition(listCity);
});

// Store past searches
$(document).ready(function() {
    var searchHistoryArr = JSON.parse(localStorage.getItem("city"));

    if (searchHistoryArr !== null) {
        var lastSearchedIndex = searchHistoryArr.length - 1;
        var lastSearchedCity = searchHistoryArr[lastSearchedIndex];
        currentCondition(lastSearchedCity);
        console.log(`Last searched City: ${lastSearchedCity}`);
    }
});