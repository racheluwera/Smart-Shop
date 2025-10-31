document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("favoritesContainer");
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

  if (favorites.length === 0) {
    container.innerHTML = `<p class="text-center text-gray-500">You have no favorites yet.</p>`;
    return;
  }

  favorites.forEach((item) => {
    const card = document.createElement("div");
    card.className =
      "bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition";

    card.innerHTML = `
      <img src="${item.image}" alt="${item.title}" class="w-full h-48 object-cover"/>
      <div class="p-4">
        <h3 class="text-xl font-semibold mb-2 truncate">${item.title}</h3>
        <p class="text-gray-600 mb-2">$${item.price}</p>
      </div>
    `;
    container.appendChild(card);
  });
});
