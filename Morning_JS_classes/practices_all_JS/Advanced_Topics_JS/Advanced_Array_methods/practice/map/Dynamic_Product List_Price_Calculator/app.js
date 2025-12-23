const productsEl = document.getElementById('products');
const totalPriceEl = document.getElementById('totalPrice');
const filterButtons = document.querySelectorAll('.filters button');

let totalInterval;

const products = [
  { name: "Laptop", price: 1200, category: "electronics" },
  { name: "Smartphone", price: 800, category: "electronics" },
  { name: "Jeans", price: 50, category: "clothing" },
  { name: "T-Shirt", price: 20, category: "clothing" },
  { name: "JavaScript Book", price: 30, category: "books" },
  { name: "CSS Guide", price: 25, category: "books" }
];

// Render products based on selected category
function renderProducts(category = "all") {
  productsEl.innerHTML = "";
  const filtered = category === "all" ? products : products.filter(p => p.category === category);

  filtered.map(p => {
    const card = document.createElement('div');
    card.className = "product-card";
    card.innerHTML = `
      <h3>🛍️ ${p.name}</h3>
      <p>Price: $${p.price}</p>
      <p>Category: ${p.category}</p>
    `;
    productsEl.appendChild(card);
  });

  // Reset current total to 0 to avoid stacking
  totalPriceEl.textContent = 0;

  // Animate total price
  const total = filtered.map(p => p.price).reduce((a,b) => a + b, 0);
  animateTotal(total);
}


// Animate total price with smooth effect
function animateTotal(newTotal) {
  clearInterval(totalInterval); // stop any previous interval

  let current = parseInt(totalPriceEl.textContent);
  totalInterval = setInterval(() => {
    if(current === newTotal) {
      clearInterval(totalInterval);
      totalPriceEl.classList.remove('flash');
      return;
    }
    current += current < newTotal ? 1 : -1;
    totalPriceEl.textContent = current;
    totalPriceEl.classList.add('flash');
  }, 10);
}


// Filter buttons click
filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderProducts(btn.dataset.category);
  });
});

// Initial render
renderProducts();
