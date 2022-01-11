const apiKey = 'api_key=636459deadfe82e42a5d3a5699ce8a6c';
const baseURL = 'https://api.themoviedb.org/3/';
const apiURL = baseURL + '/discover/movie?sort_by=popularity.desc&' + apiKey;

getMovies(apiURL);

function getMovies(url) {
    fetch(url).then(res => res.json()).then(data => {
        
        showMovies(data.results);
    })
}

function showMovies(data) {

    data.forEach(movie => {
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML = `
        `
    })
}

// Global Variables
// var apiKey = "636459deadfe82e42a5d3a5699ce8a6c";
// var searchHistoryList = [];

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
