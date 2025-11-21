/*
  script.js
  Full JS file for Neumorphism Login + Signup + Dashboard
  Handles signup, login, validations, dashboard display, logout, delete account
  Uses localStorage keys: 'users' and 'currentUser'
*/

// Helpers
function getUsers(){
  const raw = localStorage.getItem('users');
  try{
    return raw ? JSON.parse(raw) : [];
  }catch(e){
    console.error('Invalid users in localStorage, clearing.');
    localStorage.removeItem('users');
    return [];
  }
}

function saveUsers(users){
  localStorage.setItem('users', JSON.stringify(users));
}

function setCurrentUser(email){
  localStorage.setItem('currentUser', email);
}

function getCurrentUser(){
  return localStorage.getItem('currentUser');
}

function clearCurrentUser(){
  localStorage.removeItem('currentUser');
}

function findUserByEmail(email){
  const users = getUsers();
  return users.find(u => u.email.toLowerCase() === email.toLowerCase());
}

// --- Signup page logic ---
const signupForm = document.getElementById('signup-form');
if(signupForm){
  signupForm.addEventListener('submit', function(e){
    e.preventDefault();

    // inputs
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');

    let valid = true;

    // validations
    if(!name.value.trim()){ name.classList.add('is-invalid'); valid=false; } else { name.classList.remove('is-invalid'); }
    if(!email.value.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.value)){ email.classList.add('is-invalid'); valid=false; } else { email.classList.remove('is-invalid'); }
    if(!password.value || password.value.length<6){ password.classList.add('is-invalid'); valid=false; } else { password.classList.remove('is-invalid'); }
    if(password.value !== confirmPassword.value){ confirmPassword.classList.add('is-invalid'); valid=false; } else { confirmPassword.classList.remove('is-invalid'); }

    if(!valid) return;

    // check unique email
    const users = getUsers();
    if(users.some(u=>u.email.toLowerCase()===email.value.toLowerCase())){
      alert('An account with this email already exists. Try logging in.');
      return;
    }

    // add user
    users.push({ name: name.value.trim(), email: email.value.trim().toLowerCase(), password: password.value });
    saveUsers(users);

    // set user logged in and redirect
    setCurrentUser(email.value.trim().toLowerCase());
    window.location.href='dashboard.html';
  });
}

// --- Login page logic ---
const loginForm = document.getElementById('login-form');
if(loginForm){
  loginForm.addEventListener('submit', function(e){
    e.preventDefault();

    const email = document.getElementById('loginEmail');
    const password = document.getElementById('loginPassword');

    let valid = true;
    if(!email.value.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.value)){ email.classList.add('is-invalid'); valid=false; } else { email.classList.remove('is-invalid'); }
    if(!password.value){ password.classList.add('is-invalid'); valid=false; } else { password.classList.remove('is-invalid'); }

    if(!valid) return;

    const user = findUserByEmail(email.value.trim());
    if(!user || user.password!==password.value){
      alert('Invalid email or password.');
      return;
    }

    // login success
    setCurrentUser(user.email);
    window.location.href='dashboard.html';
  });
}

// --- Dashboard logic ---
const welcomeEl = document.getElementById('welcome');
const profileNameEl = document.getElementById('profile-name');
const profileEmailEl = document.getElementById('profile-email');
const userEmailEl = document.getElementById('user-email');
const logoutBtn = document.getElementById('logout-btn');
const deleteBtn = document.getElementById('delete-account');

if(welcomeEl){
  const currentEmail = getCurrentUser();
  if(!currentEmail){ window.location.href='login.html'; }
  else{
    const user = findUserByEmail(currentEmail);
    if(!user){ clearCurrentUser(); window.location.href='signup.html'; }
    else{
      welcomeEl.textContent=`Welcome, ${user.name.split(' ')[0]} 👋`;
      profileNameEl.textContent=user.name;
      profileEmailEl.textContent=user.email;
      if(userEmailEl) userEmailEl.textContent=user.email;
    }
  }
}

if(logoutBtn){
  logoutBtn.addEventListener('click', ()=>{
    clearCurrentUser();
    window.location.href='login.html';
  });
}

if(deleteBtn){
  deleteBtn.addEventListener('click', ()=>{
    if(!confirm('Are you sure you want to delete your account? This cannot be undone.')) return;
    const current=getCurrentUser();
    if(!current) return;
    let users=getUsers();
    users=users.filter(u=>u.email.toLowerCase()!==current.toLowerCase());
    saveUsers(users);
    clearCurrentUser();
    window.location.href='signup.html';
  });
}

// Redirect logged-in users from login/signup to dashboard
if(location.pathname.endsWith('login.html') || location.pathname.endsWith('signup.html') || location.pathname.endsWith('/')){
  const cur = getCurrentUser();
  if(cur){
    setTimeout(()=>{
      if(getCurrentUser()) window.location.href='dashboard.html';
    },300);
  }
}
