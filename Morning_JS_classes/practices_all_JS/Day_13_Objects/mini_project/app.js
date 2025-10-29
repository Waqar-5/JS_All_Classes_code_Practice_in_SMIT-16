// ♾️ Infinity Objects Dashboard
// ============================================
// This project demonstrates every major Object concept in JavaScript,
// including constructors, prototypes, nested objects, property checking,
// cloning, dynamic methods, and real-world interaction with DOM + LocalStorage.

// --------------------------------------------
// 🧩 Constructor Function for Product
function Product(name, price, stock) {          // Constructor used to create multiple product objects
  this.name = name;                             // 'this' assigns each property to the new object
  this.price = price;                           // Stores product price
  this.stock = stock;                           // Stores available quantity
  this.sales = 0;                               // Tracks total sales revenue (starts at 0)
}

// 🔹 Prototype method for selling a product
Product.prototype.sell = function(qty = 1) {    // Adds a reusable method to all Product objects
  if (this.stock >= qty) {                      // Check if enough stock exists before selling
    this.stock -= qty;                          // Decrease stock by sold quantity
    this.sales += qty * this.price;             // Increase sales revenue
    console.log(`${qty} ${this.name}(s) sold successfully.`);  // Log confirmation message
  } else {
    alert(`⚠️ Not enough stock for ${this.name}`);  // Warn if stock is insufficient
  }
};

// 🔹 Another prototype method returning formatted product info
Product.prototype.details = function() {        // Returns a text representation of product info
  return `
    🛍️ <b>${this.name}</b><br>                 <!-- Shows product name -->
    💵 Price: $${this.price}<br>                <!-- Shows price -->
    📦 Stock: ${this.stock}<br>                 <!-- Shows remaining stock -->
    💰 Sales: $${this.sales}                    <!-- Shows total earned -->
  `;
};

// --------------------------------------------
// 👨‍💼 Constructor Function for Employee (Nested concept)
function Employee(name, role) {                 // Creates Employee objects
  this.name = name;                             // Stores employee name
  this.role = role;                             // Stores employee role or title
}

// 🔹 Prototype method (shared by all Employee objects)
Employee.prototype.greet = function() {         // Adds a reusable greeting function
  return `👋 Hi, I'm ${this.name}, your ${this.role}.`; // Uses 'this' to access instance properties
};

// --------------------------------------------
// 🧠 Main Object: Inventory (manages all products)
// Demonstrates nested objects, methods, for...in loop, and object transformation.
const Inventory = {
  products: {},                                 // Object to store all Product instances

  // 🔹 Add product (Object property + method)
  add(productId, product) {                     // Adds new product with a key (id)
    this.products[productId] = product;         // Dynamically sets object property
    this.save();                                // Automatically saves to localStorage
  },

  // 🔹 Remove a product (delete keyword)
  remove(productId) {                           // Removes a product from inventory
    delete this.products[productId];            // Deletes property from object
    this.save();                                // Save updated state
  },

  // 🔹 Count number of products (for...in loop)
  count() {                                     // Returns how many items exist
    let total = 0;                              // Counter variable
    for (let key in this.products) total++;     // Loops over object keys
    return total;                               // Returns final count
  },

  // 🔹 Convert object to array (Object.keys concept)
  toArray() {                                   // Converts keys into array
    return Object.keys(this.products);          // Returns all product IDs
  },

  // 🔹 Save data to localStorage (Object → JSON)
  save() {                                      // Persists inventory data in browser storage
    localStorage.setItem("inventory", JSON.stringify(this.products));
  },

  // 🔹 Load data from localStorage (JSON → Object)
  load() {                                      // Reads stored data when app starts
    const data = localStorage.getItem("inventory"); // Fetch from browser memory
    if (data) {                                 // Check if any data exists
      const parsed = JSON.parse(data);          // Convert JSON string to object
      // Rebuild Product objects to restore methods
      for (let key in parsed) {
        const p = parsed[key];                  // Extract each stored product
        this.products[key] = new Product(p.name, p.price, p.stock); // Recreate object properly
        this.products[key].sales = p.sales;     // Restore its sales value
      }
    }
  }
};

// --------------------------------------------
// ⚡ DOM Elements (connects UI with JS logic)
const nameInput = document.getElementById("name");       // Input for product name
const priceInput = document.getElementById("price");     // Input for price
const stockInput = document.getElementById("stock");     // Input for stock count
const addProductBtn = document.getElementById("addProductBtn"); // Button to add product
const inventoryDiv = document.getElementById("inventory");      // Container to show product cards

// --------------------------------------------
// 🎯 Add Product (Event-driven creation)
addProductBtn.addEventListener("click", () => {           // Runs when button is clicked
  const name = nameInput.value.trim();                    // Read user input for product name
  const price = Number(priceInput.value);                 // Convert price to number
  const stock = Number(stockInput.value);                 // Convert stock to number

  if (!name || !price || !stock) return alert("⚠️ Fill all fields!"); // Validation check

  const newProduct = new Product(name, price, stock);     // Create new Product object
  Inventory.add(name.toLowerCase(), newProduct);          // Add to main Inventory object

  renderInventory();                                      // Refresh the UI with updated list
  nameInput.value = priceInput.value = stockInput.value = ""; // Clear input fields
});

// --------------------------------------------
// 🎨 Render Inventory UI (Object → DOM)
function renderInventory() {
  inventoryDiv.innerHTML = "";                            // Clear previous content

  for (let key in Inventory.products) {                   // Loop through all products
    const p = Inventory.products[key];                    // Access each Product object
    const card = document.createElement("div");           // Create a card container
    card.className = "card";                              // Add a CSS class
    card.innerHTML = p.details();                         // Insert HTML from .details() method

    const sellBtn = document.createElement("button");      // Create "Sell" button
    sellBtn.textContent = "Sell One";                     // Button text
    sellBtn.onclick = () => {                             // When clicked...
      p.sell(1);                                          // Call sell() method
      Inventory.save();                                   // Save updated data
      renderInventory();                                  // Re-render UI
    };

    const delBtn = document.createElement("button");       // Create "Remove" button
    delBtn.textContent = "Remove";                        // Button label
    delBtn.style.background = "#f44336";                  // Red color for delete
    delBtn.onclick = () => {                              // On click event
      Inventory.remove(key);                              // Delete from object
      renderInventory();                                  // Re-render after removal
    };

    card.appendChild(sellBtn);                            // Add "Sell" button to card
    card.appendChild(delBtn);                             // Add "Remove" button to card
    inventoryDiv.appendChild(card);                       // Add card to main container
  }
}

// --------------------------------------------
// 🧰 Demonstration: Property Checking + Prototype verification
const emp = new Employee("Zara", "Manager");              // Create Employee instance
console.log(emp.greet());                                 // Test greet() method

if ("name" in emp) console.log("✅ Property 'name' exists."); // Check property existence
if (typeof emp.greet === "function") console.log("✅ Method 'greet' exists."); // Check method existence
if (!("salary" in emp)) console.log("⚠️ 'salary' property not found."); // Negative check example


// --------------------------------------------
// 🚀 Initialization: Start Fresh Every Run

localStorage.removeItem("inventory"); // ✅ Clear saved inventory each time page loads
Inventory.products = {};              // ✅ Reset the products object to empty
renderInventory();                    // ✅ Render fresh empty state

// --------------------------------------------
// 🚀 Initialization: Load saved data & render
Inventory.load();                                         // Load products from localStorage
renderInventory();                                        // Display current inventory on page
