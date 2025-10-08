import { fetchBooks } from "../Lab3/fetchbooks.js";

const menubtn = document.getElementById("humberger");
const mobilenav = document.getElementById("mobile-nav");

if (menubtn) {
  menubtn.addEventListener("click", () => {
    mobilenav.classList.toggle("hidden");
  });
}

let favoriteBooks = JSON.parse(localStorage.getItem("favoriteBooks")) || [];

function renderBooks(books) {
  const grid = document.getElementById("book-grid");
  if (!grid) return;

  grid.innerHTML = ""; 

  if (books.length === 0) {
    grid.innerHTML = `<p class="text-center col-span-full">No books found.</p>`;
    return;
  }

  books.forEach(book => {
    const isFav = favoriteBooks.some(fav => fav.id === book.id);

    const card = document.createElement("div");
    card.className = "bg-gray-200 rounded-lg p-4 space-y-2";

    card.innerHTML = `
      <div class="w-full h-60 bg-gray-300 rounded mb-4 flex items-center justify-center overflow-hidden">
        <img src="${book.image}" alt="${book.title}" class="h-[230px] w-[300px] object-cover mx-auto"/>
      </div>
      <h3 class="font-semibold text-center">${book.title}</h3>
      <p class="text-sm text-center">${book.author}</p>
      <div class="flex justify-between items-center">
        <span class="text-xs bg-gray-100 rounded px-2 py-1">${book.genre}</span>
        <i class="fa-solid fa-heart cursor-pointer ${isFav ? "text-red-500" : "text-gray-600"}" data-id="${book.id}"></i>
      </div>
    `;

    grid.appendChild(card);
  });

  // Favorite icon listeners
  document.querySelectorAll("i[data-id]").forEach(icon => {
    icon.addEventListener("click", () => {
      const bookId = icon.getAttribute("data-id");
      const isFav = favoriteBooks.some(fav => fav.id === bookId);

      if (isFav) {
        favoriteBooks = favoriteBooks.filter(fav => fav.id !== bookId);
        icon.classList.remove("text-red-500");
        icon.classList.add("text-gray-600");
      } else {
        const book = books.find(b => b.id === bookId);
        favoriteBooks.push(book);
        icon.classList.add("text-red-500");
        icon.classList.remove("text-gray-600");
      }

      localStorage.setItem("favoriteBooks", JSON.stringify(favoriteBooks));
    });
  });
}


document.addEventListener("DOMContentLoaded", async () => {
  const grid = document.getElementById("book-grid");
  if (grid) grid.innerHTML = `<p class="text-center col-span-full">Loading...</p>`;

  const books = await fetchBooks("books"); 
  renderBooks(books);
});

const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");

if (searchBtn && searchInput) {
  searchBtn.addEventListener("click", async (e) => {
    e.preventDefault(); 

    let query = searchInput.value.trim();
    if (query.length < 2) {
      query = "the"; 
    }

    const books = await fetchBooks(query);
    renderBooks(books);
  });

  searchInput.addEventListener("keyup", async (e) => {
    if (e.key === "Enter") {
      let query = searchInput.value.trim();
      if (query.length < 2) {
        query = "the";
      }
      const books = await fetchBooks(query);
      renderBooks(books);
    }
  });
}
