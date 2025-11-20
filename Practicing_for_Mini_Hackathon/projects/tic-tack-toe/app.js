const cells = document.querySelectorAll('.cell');
const statusEl = document.getElementById('status');
const restartBtn = document.getElementById('restartBtn');

let board = Array(9).fill('');
let currentPlayer = 'X';
let gameActive = true;

const winningConditions = [
  [0,1,2],[3,4,5],[6,7,8], // Rows
  [0,3,6],[1,4,7],[2,5,8], // Columns
  [0,4,8],[2,4,6]          // Diagonals
];

// Handle cell click
cells.forEach(cell => {
  cell.addEventListener('click', () => {
    const index = cell.getAttribute('data-index');
    if(board[index] !== '' || !gameActive) return;

    board[index] = currentPlayer;
    cell.textContent = currentPlayer;
    cell.classList.add('taken');

    if(checkWin()) {
      statusEl.textContent = `Player ${currentPlayer} Wins!`;
      gameActive = false;
    } else if(board.every(cell => cell !== '')) {
      statusEl.textContent = `It's a Draw!`;
      gameActive = false;
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      statusEl.textContent = `Player ${currentPlayer}'s Turn`;
    }
  });
});

// Check win
function checkWin() {
  return winningConditions.some(condition => {
    const [a,b,c] = condition;
    return board[a] && board[a] === board[b] && board[a] === board[c];
  });
}

// Restart game
restartBtn.addEventListener('click', () => {
  board = Array(9).fill('');
  currentPlayer = 'X';
  gameActive = true;
  statusEl.textContent = `Player X's Turn`;
  cells.forEach(cell => {
    cell.textContent = '';
    cell.classList.remove('taken');
  });
});
