# 🎬 Flatadango - Moringa Movie Theatre [MMT]

Flatadango is a **movie ticket booking web app** built with HTML, CSS, and JavaScript.  
It fetches movies from a local JSON server, displays details, and allows users to **buy tickets** until sold out.  

This project was created as part of **Moringa School – Phase 1**.

---

## 🚀 Features
- 📜 Sidebar with **list of movies**
- 🎥 Movie details panel with:
  - Poster
  - Title
  - Runtime
  - Showtime
  - Available tickets
- 🎟️ **Buy Ticket** button (tickets decrease as you buy)
- ❌ Button changes to **Sold Out** when no tickets remain
- 🖥️ Clean responsive design (desktop & mobile)

---

## 📂 Project Structure
**Running Locally**

Start the fake server:

json-server --watch db.json --port 3000


Open index.html in your browser.

You should see the sidebar with all movies and the movie details on the main screen.

Project Structure
Flatadango/
│
├── index.html       # Main HTML page
├── script.js        # JavaScript functionality
├── style.css        # CSS styling
├── db.json          # Fake backend data
└── README.md        # Project documentation

How to Use

Click on any movie in the sidebar to view its details.

Check available tickets.

Click Buy Ticket to simulate buying a ticket.

When tickets reach 0, the button will change to Sold Out.

Technologies Used

HTML5

CSS3

JavaScript (ES6)

JSON Server (fake backend)

Author

Linda Jerop Chepchieng

GitHub Profile

