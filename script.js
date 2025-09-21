// Fetches ALL movies
fetch("http://localhost:3000/films")
  .then(res => res.json())
  .then(movies => {
    // shows the first movie by default
    showMovieDetails(movies[0]);

    // also lists all movies on the left side
    const filmsList = document.getElementById("films");
    filmsList.innerHTML = ""; // clear placeholder <li>

    movies.forEach(movie => {
      const li = document.createElement("li");
      li.textContent = movie.title;
      li.classList.add("film", "item");

      // event: click on a movie ---> shows its details
      li.addEventListener("click", () => {
        showMovieDetails(movie);
      });

      filmsList.appendChild(li);
    });
  });



