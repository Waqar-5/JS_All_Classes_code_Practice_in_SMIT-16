// ==============================
// Product Inventory with Objects
// ==============================

// Array to store all product objects
const products = []; // stores all product objects dynamically

// Select form and product list container elements from DOM
const form = document.getElementById("productForm"); // form for adding new products
const productList = document.getElementById("productList"); // div container for product cards
const searchInput = document.getElementById("search"); // input field for search/filter
const sortSelect = document.getElementById("sort"); // select dropdown for sorting

// Add event listener to handle form submission
form.addEventListener("submit", function(e){
  e.preventDefault(); // prevent default form submission (page reload)

  // Get input values from form and trim whitespace
  const name = document.getElementById("name").value.trim(); // product name
  const category = document.getElementById("category").value.trim(); // product category
  const price = Number(document.getElementById("price").value); // convert price input to number
  const stock = Number(document.getElementById("stock").value); // convert stock input to number

  // Validation: check for empty fields or invalid numbers
  if(!name || !category || isNaN(price) || isNaN(stock)){
    alert("Enter valid values!"); // alert user if invalid
    return; // stop further execution
  }

  // Create product object with properties and methods
  const product = {
    name, // product name
    category, // product category
    price, // product price
    stock, // product stock quantity
    tags: [], // empty array for product tags
    rating: Math.floor(Math.random() * 5) + 1, // random rating 1-5

    // Method to update stock
    updateStock(amount){
      this.stock += amount; // increase current stock by amount
    },

    // Method to apply discount
    applyDiscount(percent){
      this.price = this.price * (1 - percent/100); // reduce price by percent
    },

    // Method to add tag
    addTag(tag){
      this.tags.push(tag); // add tag to tags array
    }
  };

  // Add new product object to products array
  products.push(product);

  displayProducts(); // refresh product list display
  form.reset(); // clear form input fields
});

// Function to display products on page
function displayProducts(filtered = products){ // default parameter = all products
  productList.innerHTML = ""; // clear previous product cards

  // Loop through products (or filtered products)
  filtered.forEach((prod, index) => {
    const card = document.createElement("div"); // create div for product card
    card.className = "product-card"; // assign CSS class for styling
    card.innerHTML = `
      <h3>${prod.name}</h3> <!-- product name -->
      <span>Category: ${prod.category}</span> <!-- product category -->
      <span>Price: $${prod.price.toFixed(2)}</span> <!-- formatted price -->
      <span>Stock: ${prod.stock}</span> <!-- stock quantity -->
      <span>Rating: ${prod.rating} ⭐</span> <!-- rating stars -->
      <span>Tags: ${prod.tags.join(", ") || "None"}</span> <!-- tags or "None" -->
      <button class="update-btn" onclick="updateStock(${index})">
        <i class="fa-solid fa-box"></i> Add Stock
      </button>
      <button class="update-btn" onclick="applyDiscount(${index})">
        <i class="fa-solid fa-percent"></i> Discount
      </button>
      <button class="update-btn" onclick="addTag(${index})">
        <i class="fa-solid fa-tag"></i> Add Tag
      </button>
      <button class="delete-btn" onclick="deleteProduct(${index})">
        <i class="fa-solid fa-trash"></i> Delete
      </button>
    `;
    productList.appendChild(card); // append card to product list container
  });
}

// Function to update stock for a product
function updateStock(index){
  const amount = Number(prompt("Add stock quantity:")); // get quantity to add
  if(!isNaN(amount)) products[index].updateStock(amount); // update stock if valid
  displayProducts(); // refresh display
}

// Function to apply discount to a product
function applyDiscount(index){
  const percent = Number(prompt("Enter discount %:")); // get discount percent
  if(!isNaN(percent)) products[index].applyDiscount(percent); // apply if valid
  displayProducts(); // refresh display
}

// Function to add a tag to a product
function addTag(index){
  const tag = prompt("Enter tag:"); // get tag from user
  if(tag) products[index].addTag(tag.trim()); // trim whitespace and add
  displayProducts(); // refresh display
}

// Function to delete a product
function deleteProduct(index){
  if(confirm(`Delete ${products[index].name}?`)){ // confirm deletion
    products.splice(index, 1); // remove product from array
    displayProducts(); // refresh display
  }
}

// Search filter functionality
searchInput.addEventListener("input", () => {
  const term = searchInput.value.toLowerCase(); // convert input to lowercase
  const filtered = products.filter(prod =>
    prod.name.toLowerCase().includes(term) || // check name
    prod.category.toLowerCase().includes(term) // check category
  );
  displayProducts(filtered); // show filtered products
});

// Sorting functionality
sortSelect.addEventListener("change", () => {
  let sorted = [...products]; // copy array to avoid mutation
  if(sortSelect.value === "priceAsc") sorted.sort((a, b) => a.price - b.price); // sort ascending price
  if(sortSelect.value === "priceDesc") sorted.sort((a, b) => b.price - a.price); // sort descending price
  if(sortSelect.value === "ratingDesc") sorted.sort((a, b) => b.rating - a.rating); // sort by rating descending
  displayProducts(sorted); // refresh display
});
