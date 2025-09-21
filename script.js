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

// Function to display movie details
function showMovieDetails(movie) {
  document.getElementById("title").textContent = movie.title;
  document.getElementById("runtime").textContent = `${movie.runtime} minutes`;
  document.getElementById("showtime").textContent = movie.showtime;

  const availableTickets = movie.capacity - movie.tickets_sold;
  document.getElementById("tickets").textContent =
    `Available Tickets: ${availableTickets}`;

  document.getElementById("poster").src = movie.poster;

  const buyBtn = document.getElementById("buy-ticket");
  buyBtn.textContent = availableTickets > 0 ? "Buy Ticket" : "Sold Out";

  // reset old event listeners (avoid multiple clicks stacking up)
  buyBtn.replaceWith(buyBtn.cloneNode(true));
  const newBuyBtn = document.getElementById("buy-ticket");

  newBuyBtn.addEventListener("click", () => {
    if (availableTickets > 0) {
      alert("Ticket bought!");
    } else {
      newBuyBtn.textContent = "Sold Out";
    }
  });
}

