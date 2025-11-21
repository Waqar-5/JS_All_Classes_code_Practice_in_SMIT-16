// Products array
const products = [
  {id:1,name:"MacBook Pro",category:"Electronics",price:2399,img:"https://th.bing.com/th/id/R.17a29d293b24dba1ac20d106f0cdffb9?rik=StzExGO3CA1udA&pid=ImgRaw&r=0"},
  {id:2,name:"Sony Headphones",category:"Electronics",price:199,img:"https://tse1.mm.bing.net/th/id/OIP.fnjCOfuiwF8GCShqu7_LnQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3"},
  {id:3,name:"Nike Air Max",category:"Clothing",price:120,img:"https://th.bing.com/th/id/R.09f7a48c9a087c2e3725c71758a6f2b9?rik=%2b%2fzFZxyVrjIE0g&pid=ImgRaw&r=0"},
  {id:4,name:"Coffee Mug",category:"Home",price:15,img:"https://tse2.mm.bing.net/th/id/OIP.7q9obWrr6OH0zKFjF5vG5QHaE8?rs=1&pid=ImgDetMain&o=7&rm=3"},
  {id:5,name:"iPhone 15",category:"Electronics",price:999,img:"https://fdn.gsmarena.com/imgroot/reviews/23/iphone-15/lifestyle/-1024w2/gsmarena_017.jpg"},
  {id:6,name:"T-Shirt",category:"Clothing",price:30,img:"https://5.imimg.com/data5/SELLER/Default/2023/1/ON/ZZ/SC/80638362/white-plain-t-shirt-1000x1000.jpg"},
  {id:7,name:"Smart Watch",category:"Electronics",price:299,img:"https://tse2.mm.bing.net/th/id/OIP.u_z0ESBy2kZWVn76qa2_9AHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"},
  {id:8,name:"Desk Lamp",category:"Home",price:45,img:"https://tse2.mm.bing.net/th/id/OIP.jKudwa2r_fcU-0LPrP671AHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"}
];



let cart=JSON.parse(localStorage.getItem('cart')||'[]');

function saveCart(){ localStorage.setItem('cart',JSON.stringify(cart)); updateCartCount(); }
function updateCartCount(){ const c=document.getElementById('cart-count'); if(c) c.textContent=cart.length; }

// Render products
function renderProducts(list){
  const container=document.getElementById('productsContainer'); if(!container) return;
  container.innerHTML='';
  list.forEach(p=>{
    const div=document.createElement('div'); div.className='col-md-3 mb-4';
    div.innerHTML=`<div class="card h-100 shadow-sm">
      <img src="${p.img}" class="card-img-top" >
      <div class="card-body d-flex flex-column">
        <h5 class="card-title">${p.name}</h5>
        <p class="card-text">$${p.price}</p>
        <p class="card-text text-muted">${p.category}</p>
        <button class="btn btn-primary mt-auto add-cart" data-id="${p.id}">Add to Cart</button>
      </div>
    </div>`;
    container.appendChild(div);
  });
  document.querySelectorAll('.add-cart').forEach(btn=>{
    btn.addEventListener('click',e=>{
      const pid=parseInt(e.target.dataset.id);
      const prod=products.find(p=>p.id===pid);
      if(prod){ cart.push(prod); saveCart(); alert(prod.name+' added to cart!'); }
    });
  });
}

// Filters & Search
const searchInput=document.getElementById('searchInput');
const categoryFilter=document.getElementById('categoryFilter');
const priceFilter=document.getElementById('priceFilter');

function applyFilters(){
  let filtered=[...products];
  if(searchInput && searchInput.value.trim()) filtered=filtered.filter(p=>p.name.toLowerCase().includes(searchInput.value.toLowerCase()));
  if(categoryFilter && categoryFilter.value) filtered=filtered.filter(p=>p.category===categoryFilter.value);
  if(priceFilter && priceFilter.value){
    const [min,max]=priceFilter.value.split('-').map(Number);
    filtered=filtered.filter(p=>p.price>=min && p.price<=max);
  }
  renderProducts(filtered);
}

if(searchInput) searchInput.addEventListener('input',applyFilters);
if(categoryFilter) categoryFilter.addEventListener('change',applyFilters);
if(priceFilter) priceFilter.addEventListener('change',applyFilters);

renderProducts(products);
updateCartCount();

// Cart page rendering
const cartContainer=document.getElementById('cartContainer');
const totalPriceEl=document.getElementById('totalPrice');
const clearCartBtn=document.getElementById('clearCart');

if(cartContainer){
  function renderCart(){
    cartContainer.innerHTML='';
    let total=0;
    cart.forEach((p,i)=>{
      total+=p.price;
      const div=document.createElement('div'); div.className='col-12 mb-2';
      div.innerHTML=`<div class="card p-2 d-flex flex-row align-items-center">
        <img src="${p.img}" style="height:60px; width:60px; object-fit:cover; margin-right:10px;">
        <div class="flex-grow-1">
          <h6>${p.name}</h6>
          <p class="mb-0">$${p.price}</p>
        </div>
        <button class="btn btn-sm btn-danger remove-item" data-index="${i}">Remove</button>
      </div>`;
      cartContainer.appendChild(div);
    });
    if(totalPriceEl) totalPriceEl.textContent=total;
    document.querySelectorAll('.remove-item').forEach(btn=>{
      btn.addEventListener('click',e=>{
        cart.splice(parseInt(e.target.dataset.index),1);
        saveCart(); renderCart();
      });
    });
  }
  renderCart();
  if(clearCartBtn) clearCartBtn.addEventListener('click',()=>{ cart=[]; saveCart(); renderCart(); });
}

// Redirect if not logged in
if(!localStorage.getItem('currentUser')){
  if(location.pathname.includes('products.html')||location.pathname.includes('cart.html')){
    window.location.href='login.html';
  }
}

// Logout button
const logoutBtn=document.getElementById('logout-btn');
if(logoutBtn) logoutBtn.addEventListener('click',()=>{ localStorage.removeItem('currentUser'); window.location.href='login.html'; });
