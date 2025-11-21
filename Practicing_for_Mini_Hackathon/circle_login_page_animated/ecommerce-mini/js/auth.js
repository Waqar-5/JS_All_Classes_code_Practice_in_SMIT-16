function getUsers(){ return JSON.parse(localStorage.getItem('users')||'[]'); }
function saveUsers(users){ localStorage.setItem('users', JSON.stringify(users)); }
function setCurrentUser(email){ localStorage.setItem('currentUser', email); }
function getCurrentUser(){ return localStorage.getItem('currentUser'); }
function clearCurrentUser(){ localStorage.removeItem('currentUser'); }
function findUserByEmail(email){ return getUsers().find(u => u.email.toLowerCase()===email.toLowerCase()); }

// Signup
const signupForm=document.getElementById('signup-form');
if(signupForm){
  signupForm.addEventListener('submit', e=>{
    e.preventDefault();
    const name=document.getElementById('name'), email=document.getElementById('email'), password=document.getElementById('password'), confirmPassword=document.getElementById('confirmPassword');
    let valid=true;
    if(!name.value.trim()){name.classList.add('is-invalid'); valid=false} else{name.classList.remove('is-invalid');}
    if(!email.value.trim()||!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.value)){email.classList.add('is-invalid'); valid=false} else{email.classList.remove('is-invalid');}
    if(!password.value||password.value.length<6){password.classList.add('is-invalid'); valid=false} else{password.classList.remove('is-invalid');}
    if(password.value!==confirmPassword.value){confirmPassword.classList.add('is-invalid'); valid=false} else{confirmPassword.classList.remove('is-invalid');}
    if(!valid) return;
    const users=getUsers();
    if(users.some(u=>u.email.toLowerCase()===email.value.toLowerCase())){alert('Email exists'); return;}
    users.push({name:name.value.trim(),email:email.value.trim().toLowerCase(),password:password.value});
    saveUsers(users); setCurrentUser(email.value.trim().toLowerCase());
    window.location.href='login.html';
  });
}

// Login
const loginForm=document.getElementById('login-form');
if(loginForm){
  loginForm.addEventListener('submit', e=>{
    e.preventDefault();
    const email=document.getElementById('loginEmail'), password=document.getElementById('loginPassword');
    let valid=true;
    if(!email.value.trim()||!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.value)){email.classList.add('is-invalid'); valid=false} else{email.classList.remove('is-invalid');}
    if(!password.value){password.classList.add('is-invalid'); valid=false} else{password.classList.remove('is-invalid');}
    if(!valid) return;
    const user=findUserByEmail(email.value.trim());
    if(!user||user.password!==password.value){alert('Invalid credentials'); return;}
    setCurrentUser(user.email); window.location.href='products.html';
  });
}

// Logout
const logoutBtn=document.getElementById('logout-btn');
if(logoutBtn){ logoutBtn.addEventListener('click',()=>{ clearCurrentUser(); window.location.href='login.html'; }); }
