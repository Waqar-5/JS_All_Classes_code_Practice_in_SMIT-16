// Sample products
const products = [
  {id:1,name:"Wireless Headphones",price:59.99,img:"https://source.unsplash.com/400x300/?headphones"},
  {id:2,name:"Smart Watch",price:129.99,img:"https://source.unsplash.com/400x300/?watch"},
  {id:3,name:"Laptop",price:799.99,img:"https://source.unsplash.com/400x300/?laptop"},
  {id:4,name:"Sneakers",price:89.99,img:"https://source.unsplash.com/400x300/?sneakers"},
  {id:5,name:"Camera",price:499.99,img:"https://source.unsplash.com/400x300/?camera"},
  {id:6,name:"Backpack",price:39.99,img:"https://source.unsplash.com/400x300/?backpack"}
];

let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Helper Functions
function saveCart() { localStorage.setItem('cart', JSON.stringify(cart)); }
function updateCartCount() {
  const count = cart.reduce((acc,item)=> acc+item.qty,0);
  const el = document.getElementById('cart-count');
  if(el) el.textContent = count;
}

// Render Featured Products (Home Page)
function renderFeaturedProducts() {
  const container = document.getElementById('featured-products');
  if(!container) return;
  container.innerHTML = '';
  products.slice(0,4).forEach(p=>{
    const col = document.createElement('div');
    col.className='col-sm-6 col-md-3 mb-3';
    col.innerHTML = `<div class="card h-100 shadow-sm">
      <img src="${p.img}" class="card-img-top" alt="${p.name}">
      <div class="card-body d-flex flex-column">
        <h5 class="card-title">${p.name}</h5>
        <p class="card-text">$${p.price.toFixed(2)}</p>
        <a href="product.html?id=${p.id}" class="btn btn-primary mt-auto">View Details</a>
      </div>
    </div>`;
    container.appendChild(col);
  });
}

// Render Products Page
function renderProducts(filter='') {
  const container = document.getElementById('product-grid');
  if(!container) return;
  container.innerHTML='';
  products.filter(p=>p.name.toLowerCase().includes(filter))
          .forEach(p=>{
    const col = document.createElement('div');
    col.className='col-sm-6 col-md-4 col-lg-3 mb-3';
    col.innerHTML=`<div class="card h-100 shadow-sm">
      <img src="${p.img}" class="card-img-top" alt="${p.name}">
      <div class="card-body d-flex flex-column">
        <h5 class="card-title">${p.name}</h5>
        <p class="card-text">$${p.price.toFixed(2)}</p>
        <a href="product.html?id=${p.id}" class="btn btn-primary mt-auto">View Details</a>
      </div>
    </div>`;
    container.appendChild(col);
  });
}

// Render Product Detail Page
function renderProductDetail() {
  const container=document.getElementById('product-detail');
  if(!container) return;
  const params=new URLSearchParams(window.location.search);
  const id=parseInt(params.get('id'));
  const product=products.find(p=>p.id===id);
  if(!product) { container.innerHTML='<p>Product not found</p>'; return;}
  container.innerHTML=`<div class="row">
    <div class="col-md-6">
      <img src="${product.img}" class="img-fluid rounded shadow" alt="${product.name}">
    </div>
    <div class="col-md-6">
      <h2>${product.name}</h2>
      <h4>$${product.price.toFixed(2)}</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. High-quality product for daily use.</p>
      <button class="btn btn-success" onclick="addToCart(${product.id})">Add to Cart</button>
    </div>
  </div>`;
}

// Add to cart
function addToCart(productId) {
  const product=products.find(p=>p.id===productId);
  const item=cart.find(i=>i.id===productId);
  if(item){ item.qty++; } else { cart.push({...product,qty:1}); }
  saveCart(); updateCartCount();
  alert(`${product.name} added to cart!`);
}

// Render Cart Page
function renderCartPage() {
  const container=document.getElementById('cart-items');
  if(!container) return;
  container.innerHTML='';
  let total=0;
  cart.forEach(item=>{
    total+=item.price*item.qty;
    const div=document.createElement('div');
    div.className='d-flex justify-content-between align-items-center mb-2';
    div.innerHTML=`<div>${item.name} x ${item.qty}</div>
    <div>$${(item.price*item.qty).toFixed(2)} <button class="btn btn-sm btn-danger ms-2" onclick="removeFromCart(${item.id})">Remove</button></div>`;
    container.appendChild(div);
  });
  const totalEl=document.getElementById('cart-total');
  if(totalEl) totalEl.textContent=total.toFixed(2);

  const checkoutBtn=document.getElementById('checkoutBtn');
  if(checkoutBtn){
    checkoutBtn.onclick=()=>{
      if(cart.length===0) return alert('Cart empty!');
      alert(`Thanks for your purchase! Total: $${total.toFixed(2)}`);
      cart=[]; saveCart(); renderCartPage(); updateCartCount();
    }
  }
}

// Remove from cart
function removeFromCart(productId){
  cart=cart.filter(i=>i.id!==productId);
  saveCart(); renderCartPage(); updateCartCount();
}
