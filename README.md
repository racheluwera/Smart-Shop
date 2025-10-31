 SmartShop

SmartShop is a modern and responsive online shopping web page built using HTML, Tailwind CSS, and JavaScript.
It allows users to browse products, search, filter by category, and navigate between pages such as Home, Wishlist, and Favorites.

 Features

✅ Responsive Design — built with Tailwind CSS for full mobile and desktop compatibility.
✅ Product Search — users can type a product name and press Enter or click Search to find items instantly.
✅ Category Filtering — allows users to filter products by category (Men’s Clothing, Women’s Clothing, Electronics, Jewelry, etc.).
✅ Dynamic Product Display — products are dynamically loaded and displayed using JavaScript.
✅ Wishlist and Favorites Pages — users can save their favorite products locally (using localStorage).
✅ Loading Indicator — a spinner appears while products are being fetched.
✅ Clean UI and Smooth Interactions — hover effects, transitions, and simple color themes.

 Project Structure
SmartShop/
│
├── pages/
│   ├── Index.html         # Main homepage
│   ├── WishList.html      # Wishlist page
│   ├── favorites.html     # Favorites page
│   ├── Contact.html       # Contact or about page
│
├── javascript/
│   └── fetchProducts.js   # Script that fetches products and handles search/filter
│
├── Images/
│   └── image1.jpg         # Homepage banner image
│
└── README.md              # Project documentation (this file)

 How It Works
1. Header & Navigation

The header contains navigation links to Home, Wishlist, and Favorites.

Built using a flexible Tailwind CSS flex layout with hover color transitions.

2. Hero Section

Contains a welcoming message, promotional text, and a Shop Now button.

Includes a right-side image (image1.jpg) to create a professional layout.

3. Product Section

Displays all products dynamically in a responsive grid.

Includes:

Search bar for product title search.

Search button for manual search.

Dropdown filter for product categories.

Loading spinner shown while products load.

Message box for empty search results or errors.

4. JavaScript Logic

Located in fetchProducts.js:

Fetches product data from an API (like https://fakestoreapi.com/products).

Stores all fetched products in a global variable allProducts.

Defines applyFilters() which:

Filters products by search text and category.

Displays filtered results in the #productsContainer.

Handles user interactions:

Typing in the search box triggers live search.

Pressing Enter also triggers the search.

Changing the category automatically updates the list.

5. Footer

Contains navigation links and copyright.

.Technologies Used

.HTML5	Structure and semantic layout
.Tailwind CSS	Modern, responsive styling
.JavaScript (ES6)	Logic for product fetching, searching, and filtering
.LocalStorage API	To store Wishlist and Favorites data persistently


How to Run the Project
1. Clone or Download the Repository
git clone https://github.com/racheluwera/SmartShop.git

2. Open the Project

Navigate into the project folder.

Open pages/Index.html in your web browser.


 .Future Improvements

Add a shopping cart page.

Add login/signup functionality.

Integrate with a real backend API for persistent storage.

Add pagination and product sorting (price, rating, etc.).

Author

Developed by: Rachel MUKAWERA

 GitHub: github.com/racheluwera