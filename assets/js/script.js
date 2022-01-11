// Global Variables
var apiKey = "636459deadfe82e42a5d3a5699ce8a6c";
var searchHistoryList = [];

// let baseURL = 'https://api.themoviedb.org/3/';
// let configData = null;
// let baseImageURL = null;

// let getConfig = function () {
//     let url = "".concat(baseURL, 'configuration?api_key=', apiKey);
//     fetch(url)
//     .then((result) => {
//         return result.json();
//     })
//     .then((data) => {
//         baseImageURL = data.images.secure_base_url;
//         configData = data.images;
//         console.log('config:', data);
//         console.log('config fetched');
//         runSearch('jaws')
//     })
//     .catch(function(err) {
//         alert(err);
//     });
// }

// let runSearch = function (keyword) {
//     let url = ''.concat(baseURL, 'search/movie?api_key=', apiKey, '&query=', keyword);
//     fetch(url)
//     .then(result=>result.json())
//     .then((data)=> {
//         // Process the returned data
//         document.getElementById('output').innerHTML = JSON.stringify(data, null, 4);
//         // work with results array
//     })
// }

// document.addEventListener('DOMContentLoaded', getConfig);




// Event Listener for Search Button
// $("#searchBtn").on("click", function(event) {
//     event.preventDefault();

//     var city = $("#enterCity").val().trim();
//     currentCondition(city);
//         if (!searchHistoryList.includes(city)) {
//             searchHistoryList.push(city);
//             var searchedCity = $(`<li class="list-group-item">${city}</li>`);
//             $("#searchHistory").append(searchedCity);
//         };

//         // localStorage
//         localStorage.setItem("city", JSON.stringify(searchHistoryList));
//         console.log(searchHistoryList);
// });

// // Search History
// $(document).on("click", ".list-group-item", function() {
//     var listCity = $(this).text();
//     currentCondition(listCity);
// });

// // Store past searches
// $(document).ready(function() {
//     var searchHistoryArr = JSON.parse(localStorage.getItem("city"));

//     if (searchHistoryArr !== null) {
//         var lastSearchedIndex = searchHistoryArr.length - 1;
//         var lastSearchedCity = searchHistoryArr[lastSearchedIndex];
//         currentCondition(lastSearchedCity);
//         console.log(`Last searched City: ${lastSearchedCity}`);
//     }
// });