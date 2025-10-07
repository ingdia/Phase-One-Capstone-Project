// Hamburger menu toggle
const menubtn = document.getElementById("humberger");
const mobilenav = document.getElementById("mobile-nav");

menubtn.addEventListener('click', () => {
  mobilenav.classList.toggle("hidden");
});


class Book {
  constructor(id, image, title, author, genre, year) {
    this.id = id;
    this.image = image;
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.year = year;
  }
}

const Bookstore = [
  new Book(1, "../lab1/images/book.jpg", "Atomic Habits", "James Clear", "Self-help", 2018),
  new Book(2, "../lab1/images/book.jpg", "The Subtle Art of Not Giving a F*ck", "Mark Manson", "Self-help", 2016),
  new Book(3, "../lab1/images/book.jpg", "Can't Hurt Me", "David Goggins", "Biography", 2018),
  new Book(4, "../lab1/images/book.jpg", "The Lean Startup", "Eric Ries", "Business", 2011),
  new Book(5, "../lab1/images/book.jpg", "Deep Work", "Cal Newport", "Self-help", 2016),
  new Book(6, "../lab1/images/book.jpg", "The 7 Habits of Highly Effective People", "Stephen R. Covey", "Self-help", 1989),
  new Book(7, "../lab1/images/book.jpg", "The Alchemist", "Paulo Coelho", "Fiction", 1988),
  new Book(8, "../lab1/images/book.jpg", "The Power of Now", "Eckhart Tolle", "Spirituality", 1997),
  new Book(9, "../lab1/images/book.jpg", "Thinking, Fast and Slow", "Daniel Kahneman", "Psychology", 2011),
  new Book(10, "../lab1/images/book.jpg", "Educated", "Tara Westover", "Memoir", 2018)
];


let favoriteBooks = JSON.parse(localStorage.getItem('favoriteBooks')) || [];


function renderBooks(books) {
  const grid = document.getElementById("book-grid");
  if (!grid) return;

  grid.innerHTML = ""; // clear placeholders

  books.forEach(book => {
    const isFav = favoriteBooks.some(fav => fav.id === book.id);

    const card = document.createElement("div");
    card.className = "bg-gray-200 rounded-lg p-4 space-y-2";

    card.innerHTML = `
      <div class="w-full h-60 bg-gray-300 rounded mb-4">
        <img src="${book.image}" alt="${book.title}" class="h-[230px] w-[300px] mx-auto"/>
      </div>
      <h3 class="font-semibold text-center">${book.title}</h3>
      <p class="text-sm text-center">${book.author}</p>
      <div class="flex justify-between items-center">
        <span class="h-6 bg-gray-300 rounded w-2/3 flex items-center justify-center">${book.genre}</span>
        <i class="fa-solid fa-heart cursor-pointer ${isFav ? "text-red-500" : "text-gray-600"}" data-id="${book.id}"></i>
      </div>
    `;

    grid.appendChild(card);
  });

 // add an event listener to each favorite icon
  document.querySelectorAll("i[data-id]").forEach(icon => {
    icon.addEventListener("click", () => {
      const bookId = parseInt(icon.getAttribute("data-id"));
      const isFav = favoriteBooks.some(fav => fav.id === bookId);

      if (isFav) {
        favoriteBooks = favoriteBooks.filter(fav => fav.id !== bookId);
        icon.classList.remove("text-red-500");
        icon.classList.add("text-gray-600");
      } else {
        const book = Bookstore.find(b => b.id === bookId);
        favoriteBooks.push(book);
        icon.classList.add("text-red-500");
        icon.classList.remove("text-gray-600");
      }

      localStorage.setItem('favoriteBooks', JSON.stringify(favoriteBooks));
    });
  });
}


document.addEventListener("DOMContentLoaded", () => {
  renderBooks(Bookstore);
});
