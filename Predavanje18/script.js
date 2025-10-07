const apiUrl = "http://www.omdbapi.com/"
const apiKey = "ddc7a1c1"
const searchButton = document.getElementById("search-button")
const searchInput = document.getElementById("search-text")
const moviesWrapper = document.getElementById("movies-wrapper")
// getMovieByTitle("terminator")
// async function getMovieByTitle (title) {
//     let response = await callOMDBApi("t="+title)
//     console.log(response)
// }
searchButton.addEventListener("click", async function () {
    moviesWrapper.innerHTML = ""
    let response = await callOMDBApi(`s=${searchInput.value}`)
    if (response.Response === "False") {
        let noMoviesEl = document.createElement("h3")
        noMoviesEl.innerText = "No movies found, please try again!"
        moviesWrapper.append(noMoviesEl)
        return
    }
    for (let movie of response.Search) {
        createMovieElement(movie)
    }
})

function createMovieElement (movie) {
    let movieElement = document.createElement("div")
    movieElement.classList.add("movie-div")
    let moviePoster = document.createElement("img");
    moviePoster.src = movie.Poster;
    let movieTitle = document.createElement("h3");
    movieTitle.innerText = movie.Title
    let movieYear = document.createElement("p");
    movieYear.innerText = movie.Year
    movieElement.append(moviePoster, movieTitle, movieYear);
    moviesWrapper.appendChild(movieElement);

}



async function callOMDBApi(params) {
    const url = apiUrl+"?apikey="+apiKey+"&"+params;
    const response = await fetch(url);
    return await response.json();
}