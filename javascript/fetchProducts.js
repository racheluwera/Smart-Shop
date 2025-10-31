// fetchProduct.js

const productsContainer = document.querySelector("#productsContainer");
const searchInput = document.querySelector("#searchInput");
const searchButton = document.querySelector("#searchButton");
const categorySelect = document.querySelector("#categorySelect");
const loadingSpinner = document.querySelector("#loadingSpinner");
const messageBox = document.querySelector("#messageBox");

let allProducts = [];

//  Fetch products from API
async function fetchProducts() {
  try {
    loadingSpinner.classList.remove("hidden");
    messageBox.textContent = "";
    productsContainer.innerHTML = "";

    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) throw new Error("Network response failed.");

    allProducts = await response.json();
    displayProducts(allProducts);
  } catch (error) {
    console.error(error);
    messageBox.textContent = "⚠️ Failed to load products. Please try again later.";
  } finally {
    loadingSpinner.classList.add("hidden");
  }
}

// Display products dynamically
function displayProducts(products) {
  productsContainer.innerHTML = "";
  messageBox.textContent = "";

  if (!products || products.length === 0) {
    messageBox.textContent = "No results found.";
    return;
  }

  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.className =
      "bg-gray-100 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition";

    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.title}" class="w-full h-48 object-contain bg-white p-4" />
      <div class="p-4">
        <h3 class="text-lg font-semibold mb-2">${product.title}</h3>
        <p class="text-gray-600 mb-2 truncate">${product.description}</p>
        <p class="text-pink-600 font-bold mb-3">$${product.price}</p>
        <button class="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700 transition"
          onclick="addToWishlist(${product.id})">
          Add to Wishlist
        </button>
      </div>
    `;
    productsContainer.appendChild(productCard);
  });
}

//  Add to Wishlist (stored in localStorage)
function addToWishlist(id) {
  const product = allProducts.find((item) => item.id === id);
  if (!product) return;

  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  const exists = wishlist.find((item) => item.id === id);
  if (!exists) {
    wishlist.push(product);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    alert("✅ Added to wishlist!");
  } else {
    alert(" Already in wishlist!");
  }
}

//  apply both search text and category filter
function applyFilters() {
  const searchTerm = (searchInput.value || "").trim().toLowerCase();
  const category = categorySelect.value;

  let filtered = allProducts;

  if (category && category !== "all") {
    filtered = filtered.filter((product) => product.category === category);
  }

  if (searchTerm) {
    filtered = filtered.filter((product) =>
      product.title.toLowerCase().includes(searchTerm)
    );
  }

  displayProducts(filtered);
}

//  Search button click (explicit search)
categorySelect.addEventListener("click", () => {
  applyFilters();
});

//  Optional: live search while typing 
searchInput.addEventListener("input", () => {

  applyFilters();
});

// Enter key triggers search
searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    applyFilters();
  }
});

//  Filter by category
categorySelect.addEventListener("change", () => {
  applyFilters();
});

//  Initialize
fetchProducts();
