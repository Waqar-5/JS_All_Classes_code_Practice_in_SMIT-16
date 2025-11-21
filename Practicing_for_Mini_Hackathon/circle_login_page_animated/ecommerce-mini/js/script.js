// Sample products
const products = [
  {id:1, name:"Laptop", category:"Electronics", price:800, img:"https://via.placeholder.com/200x150?text=Laptop"},
  {id:2, name:"Headphones", category:"Electronics", price:150, img:"https://via.placeholder.com/200x150?text=Headphones"},
  {id:3, name:"T-Shirt", category:"Clothing", price:25, img:"https://via.placeholder.com/200x150?text=T-Shirt"},
  {id:4, name:"Coffee Mug", category:"Home", price:12, img:"https://via.placeholder.com/200x150?text=Coffee+Mug"},
  {id:5, name:"Smartphone", category:"Electronics", price:500, img:"https://via.placeholder.com/200x150?text=Smartphone"},
  {id:6, name:"Sneakers", category:"Clothing", price:70, img:"https://via.placeholder.com/200x150?text=Sneakers"}
];

// Cart helpers
function getCart(){ return JSON.parse(localStorage.getItem('cart') || '[]'); }
function saveCart(cart){ localStorage.setItem('cart', JSON.stringify(cart)); }
function updateCartCount(){ 
  const countEl = document.getElementById('cart-count'); 
  if(countEl) countEl.textContent = getCart().length; 
}

// Render products
function renderProducts(items){
  const list = document.getElementById('productList');
  if(!list) return;
  list.innerHTML = '';
  items.forEach(p=>{
    const col = document.createElement('div');
    col.className = 'col-md-4 mb-4';
    col.innerHTML = `
      <div class="card h-100 shadow-sm">
        <img src="${p.img}" class="card-img-top" alt="${p.name}">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${p.name}</h5>
          <p class="card-text">$${p.price} - ${p.category}</p>
          <div class="d-flex gap-2 mt-auto">
            <button class="btn btn-primary add-cart" data-id="${p.id}">Add to Cart</button>
            <a href="product.html?id=${p.id}" class="btn btn-outline-secondary">Details</a>
          </div>
        </div>
      </div>`;
    list.appendChild(col);
  });

  document.querySelectorAll('.add-cart').forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const id = parseInt(btn.dataset.id);
      const product = products.find(p=>p.id===id);
      if(product){
        const cart = getCart();
        cart.push(product);
        saveCart(cart);
        updateCartCount();
        btn.textContent = 'Added!';
        setTimeout(()=>btn.textContent='Add to Cart',800);
      }
    });
  });
}

// Render cart
function renderCart(){
  const cartItemsEl = document.getElementById('cartItems');
  if(!cartItemsEl) return;
  const cart = getCart();
  cartItemsEl.innerHTML = '';
  let total = 0;
  cart.forEach((item,i)=>{
    total += item.price;
    const div = document.createElement('div');
    div.className = 'col-md-12 mb-3';
    div.innerHTML = `
      <div class="card p-3 shadow-sm d-flex flex-row align-items-center justify-content-between">
        <div class="d-flex align-items-center">
          <img src="${item.img}" alt="${item.name}" style="width:80px; height:60px; object-fit:cover;" class="me-3 rounded">
          <div>
            <h6>${item.name}</h6>
            <small>${item.category}</small>
          </div>
        </div>
        <span>$${item.price}</span>
      </div>`;
    cartItemsEl.appendChild(div);
  });
  const totalEl = document.getElementById('totalPrice');
  if(totalEl) totalEl.textContent = total.toFixed(2);

  const clearBtn = document.getElementById('clearCart');
  if(clearBtn){
    clearBtn.addEventListener('click', ()=>{
      if(confirm('Clear all items from cart?')){
        localStorage.removeItem('cart');
        renderCart();
        updateCartCount();
      }
    });
  }
}

// Product Details
function renderProductDetails(){
  const container = document.getElementById('productDetail');
  if(!container) return;
  const urlParams = new URLSearchParams(window.location.search);
  const id = parseInt(urlParams.get('id'));
  const product = products.find(p=>p.id===id);
  if(!product){ container.innerHTML='<p>Product not found.</p>'; return; }

  container.innerHTML = `
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card shadow-sm p-3">
          <img src="${product.img}" alt="${product.name}" class="img-fluid mb-3 rounded">
          <h3>${product.name}</h3>
          <p>Category: ${product.category}</p>
          <h4>$${product.price}</h4>
          <button class="btn btn-primary" id="addToCartBtn">Add to Cart</button>
        </div>
      </div>
    </div>
  `;

  const addBtn = document.getElementById('addToCartBtn');
  addBtn.addEventListener('click', ()=>{
    const cart = getCart();
    cart.push(product);
    saveCart(cart);
    updateCartCount();
    addBtn.textContent='Added!';
    setTimeout(()=>addBtn.textContent='Add to Cart',800);
  });
}

// Filters
function setupFilters(){
  const categoryEl = document.getElementById('categoryFilter');
  const priceEl = document.getElementById('priceFilter');
  const maxPriceLabel = document.getElementById('maxPriceLabel');
  const searchEl = document.getElementById('searchInput');

  const categories = [...new Set(products.map(p=>p.category))];
  categories.forEach(c=>{
    const option = document.createElement('option');
    option.value=c;
    option.textContent=c;
    categoryEl.appendChild(option);
  });

  priceEl.max = Math.max(...products.map(p=>p.price));
  priceEl.value = priceEl.max;
  maxPriceLabel.textContent = priceEl.max;

  function filterProducts(){
    const searchVal = searchEl.value.toLowerCase();
    const catVal = categoryEl.value;
    const priceVal = parseFloat(priceEl.value);
    const filtered = products.filter(p=>{
      return (p.name.toLowerCase().includes(searchVal) || p.category.toLowerCase().includes(searchVal))
              && (catVal==='' || p.category===catVal)
              && p.price<=priceVal;
    });
    renderProducts(filtered);
  }

  categoryEl.addEventListener('change', filterProducts);
  priceEl.addEventListener('input', ()=>{
    maxPriceLabel.textContent = priceEl.value;
    filterProducts();
  });
  searchEl.addEventListener('input', filterProducts);

  filterProducts();
}

// Initialize
document.addEventListener('DOMContentLoaded', ()=>{
  updateCartCount();
  if(document.getElementById('productList')) setupFilters();
  if(document.getElementById('cartItems')) renderCart();
  if(document.getElementById('productDetail')) renderProductDetails();
});
