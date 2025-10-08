document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("favorite-grid");
  if (!grid) return;

  let favoriteBooks = JSON.parse(localStorage.getItem('favoriteBooks')) || [];

  function renderFavorites() {
    grid.innerHTML = "";

    if (favoriteBooks.length === 0) {
      grid.innerHTML = `<p class="text-center col-span-full">No favorite books yet.</p>`;
      return;
    }

    favoriteBooks.forEach(book => {
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
          <i class="fa-solid fa-trash cursor-pointer text-red-600" data-id="${book.id}"></i>
        </div>
      `;

      grid.appendChild(card);
    });
  }

  
  grid.addEventListener("click", (e) => {
    if (e.target.matches("i[data-id]")) {
      const bookId = e.target.getAttribute("data-id");
      favoriteBooks = favoriteBooks.filter(b => b.id !== bookId);
      localStorage.setItem('favoriteBooks', JSON.stringify(favoriteBooks));
      renderFavorites();
    }
  });

  renderFavorites();
});
