document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("wishlistContainer");
  const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

  if (wishlist.length === 0) {
    container.innerHTML = `<p class="text-center text-gray-500">Your wishlist is empty.</p>`;
    return;
  }

  wishlist.forEach((item) => {
    const card = document.createElement("div");
    card.className =
      "bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition";

    card.innerHTML = `
      <img src="${item.image}" alt="${item.title}" class="w-full h-48 object-cover"/>
      <div class="p-4">
        <h3 class="text-xl font-semibold mb-2 truncate">${item.title}</h3>
        <p class="text-gray-600 mb-2">$${item.price}</p>
        <button class="addToFavorites bg-pink-600 text-white px-4 py-2 rounded hover:bg-gray-600 transition">
          Add to Favorites
        </button>
      </div>
    `;

    container.appendChild(card);

    card.querySelector(".addToFavorites").addEventListener("click", () => {
      addToFavorites(item);
    });
  });
});

function addToFavorites(product) {
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  const exists = favorites.some((item) => item.id === product.id);

  if (!exists) {
    favorites.push(product);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    alert(" Added to Favorites!");
  } else {
    alert(" Already in Favorites!");
  }
}
