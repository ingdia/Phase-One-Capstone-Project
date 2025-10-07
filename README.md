# Phase-One-Capstone-Project
Book Explorer is a student-focused website project designed to make discovering books easy and fun. It helps users browse, search, and learn about a wide variety of books.


## BookNest( My Book Buddy)

A simple **Book Explorer Web App** built with **HTML**, **Tailwind CSS**, and **JavaScript (Modules)**.  
The app fetches real book data from the **Open Library API**, displays it dynamically, and allows users to **favorite books** using `localStorage`.

---

##  Features

-  **Fetch real books** from [Open Library Search API](https://openlibrary.org/developers/api).
-  **Dynamic rendering** of book cards on the page.
-  **Favorite system** using local storage (persists even after page reload).
-  **Loading placeholders** with skeleton UI using Tailwind’s `animate-pulse`.
-  **Modular JavaScript structure**:
  - `fetchbooks.js` – Handles API fetching and data transformation.
  - `main.js` – Renders books and manages favorite logic.

---

##  Tech Stack

- **HTML5**  
- **Tailwind CSS** (via CDN)  
- **Vanilla JavaScript** (ES Modules)  
- **Open Library API**

---

##  Project Structure

Phase-One-Capstone-Project/   
├───README.md
│      
│       
├───Lab1
│   │   about.html
│   │   index.html
│   │   main.js
│   │   
│   └───Images
│           book.jpg
│           image1.jpg
│           image2.jpg
│           image3.jpg
│           image4.jpg
│
├───Lab2
│       favorite.html
│       favorite.js
│
└───Lab3
        fetchbooks.js
