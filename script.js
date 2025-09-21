// Fetches ALL movies
fetch("http://localhost:3000/films")
  .then(res => res.json())
  .then(movies => {
    // shows the first movie by default
    showMovieDetails(movies[0]);


