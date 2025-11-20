// ======= Helper: Toast =======
function showToast(msg, type="success") {
  const toastContainer = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = `toast align-items-center text-bg-${type} border-0 show mb-2`;
  toast.innerHTML = `<div class="d-flex">
      <div class="toast-body">${msg}</div>
      <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
    </div>`;
  toastContainer.appendChild(toast);
  setTimeout(() => { toast.remove(); }, 3000);
}

// ====== Toggle Login & Signup ======
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const toggleToSignup = document.getElementById('toggle-to-signup');
const toggleToLogin = document.getElementById('toggle-to-login');
const formTitle = document.getElementById('form-title');

if(toggleToSignup && toggleToLogin){
  toggleToSignup.addEventListener('click', () => {
    loginForm.classList.add('d-none');
    signupForm.classList.remove('d-none');
    formTitle.innerText = "Signup";
  });

  toggleToLogin.addEventListener('click', () => {
    signupForm.classList.add('d-none');
    loginForm.classList.remove('d-none');
    formTitle.innerText = "Login";
  });
}

// ====== Signup ======
if(signupForm){
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    if(localStorage.getItem(email)){
      showToast("User already exists!", "danger");
      return;
    }

    localStorage.setItem(email, password);
    showToast("Signup successful!", "success");
    signupForm.reset();
    signupForm.classList.add('d-none');
    loginForm.classList.remove('d-none');
    formTitle.innerText = "Login";
  });
}

// ====== Login ======
if(loginForm){
  loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    if(localStorage.getItem(email) && localStorage.getItem(email) === password){
      sessionStorage.setItem("loggedUser", email);
      window.location.href = "dashboard.html";
    } else {
      showToast("Invalid credentials!", "danger");
    }
  });
}

// ====== Dashboard Logic ======
if(window.location.pathname.includes('dashboard.html')){
  const loggedUser = sessionStorage.getItem("loggedUser");
  if(!loggedUser){
    window.location.href = "index.html";
  } else {
    document.getElementById('welcome-msg').innerText = `Welcome, ${loggedUser}!`;
  }

  document.getElementById('logout-btn').addEventListener('click', () => {
    sessionStorage.removeItem("loggedUser");
    window.location.href = "index.html";
  });

  // ===== Tic-Tac-Toe =====
  const cells = document.querySelectorAll('.cell');
  const winnerMsg = document.getElementById('winner-msg');
  const resetBtn = document.getElementById('reset-game');
  let board = ["", "", "", "", "", "", "", "", ""];
  let turnX = true;
  const winPatterns = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ];

  function checkWinner(){
    for(const pattern of winPatterns){
      const [a,b,c] = pattern;
      if(board[a] && board[a] === board[b] && board[a] === board[c]){
        winnerMsg.innerText = `${board[a]} wins!`;
        cells[a].classList.add('bg-success', 'text-white');
        cells[b].classList.add('bg-success', 'text-white');
        cells[c].classList.add('bg-success', 'text-white');
        return true;
      }
    }
    if(!board.includes("")){
      winnerMsg.innerText = "Draw!";
      return true;
    }
    return false;
  }

  cells.forEach((cell, idx) => {
    cell.addEventListener('click', () => {
      if(board[idx] || winnerMsg.innerText) return;
      board[idx] = turnX ? "X" : "O";
      cell.innerText = board[idx];
      cell.classList.add(turnX ? 'text-primary' : 'text-danger');
      if(!checkWinner()) turnX = !turnX;
    });
  });

  resetBtn.addEventListener('click', () => {
    board = ["","","","","","","","",""];
    cells.forEach(cell => {
      cell.innerText = "";
      cell.className = "btn btn-outline-dark cell";
    });
    winnerMsg.innerText = "";
    turnX = true;
  });
}
