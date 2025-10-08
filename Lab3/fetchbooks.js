export async function fetchBooks(query = "the") {
  try {
    const response = await fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`);
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    const data = await response.json();
    
    const books = data.docs.map(item => ({
      id: item.key,  // unique identifier
      image: item.cover_i
        ? `https://covers.openlibrary.org/b/id/${item.cover_i}-M.jpg`
        : "../lab1/images/book.jpg", // fallback image
      title: item.title || "Untitled",
      author: item.author_name ? item.author_name.join(", ") : "Unknown Author",
      genre: item.subject ? item.subject[0] : "Unknown",
      year: item.first_publish_year || "N/A"
    }));

    return books;
  } catch (error) {
    console.error("Failed to fetch books:", error);
    return [];
  }
}
