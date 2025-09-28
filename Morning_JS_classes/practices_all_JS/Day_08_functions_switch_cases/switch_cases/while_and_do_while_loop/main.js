// DOM elements
const guessInput = document.getElementById('guessInput'); // Select the <input> element where user types their guess
const guessBtn = document.getElementById('guessBtn');     // Select the "Guess" button element
const restartBtn = document.getElementById('restartBtn'); // Select the "Play Again" button element
const message = document.getElementById('message');       // Select the <p> element where messages will be shown
const attemptsSpan = document.getElementById('attempts'); // Select the <span> showing remaining attempts
const body = document.body;                                // Get reference to <body> element to change background dynamically

// Game variables
let randomNumber; // Will store the random number user has to guess
let attempts;     // Will track how many attempts the user has left

// Confetti canvas setup
const confettiCanvas = document.getElementById('confetti'); // Select <canvas> element for confetti animation
const ctx = confettiCanvas.getContext('2d');                // Get 2D drawing context for canvas
confettiCanvas.width = window.innerWidth;                  // Set canvas width to match browser window width
confettiCanvas.height = window.innerHeight;                // Set canvas height to match browser window height

let confettiParticles = []; // Array to store all confetti particles for animation

// Initialize game
function initGame() {                             // Define a function to start or reset the game
  randomNumber = Math.floor(Math.random() * 50) + 1;   // Generate a random number between 1 and 50
  attempts = 5;                                         // Set attempts to 5
  attemptsSpan.textContent = attempts;                  // Display remaining attempts
  message.textContent = '';                              // Clear any previous messages
  guessInput.value = '';                                 // Clear the input box
  guessBtn.style.display = 'inline-block';              // Show the Guess button
  restartBtn.style.display = 'none';                    // Hide the Play Again button
  body.style.background = 'linear-gradient(135deg, #ffecd2, #fcb69f)'; // Reset background gradient
}

// Start game
initGame(); // Call initGame() to set initial state when page loads

// Handle guess button click
guessBtn.addEventListener('click', () => {        // Add click event listener to Guess button
  const guess = Number(guessInput.value);         // Convert input string value to number

  if (!guess || guess < 1 || guess > 50) {        // Validate input: must be between 1 and 50
    message.textContent = '⚠️ Enter a valid number between 1 and 50'; // Show warning if invalid
    return;                                       // Stop execution if input is invalid
  }

  if (guess === randomNumber) {                   // Check if user guessed correctly
    message.textContent = `🎉 Correct! The number was ${randomNumber}`; // Display success message
    body.style.background = 'linear-gradient(135deg, #00b09b, #96c93d)'; // Change background to green gradient
    launchConfetti();                             // Launch confetti animation
    endGame();                                    // End game (disable guess button, show restart)
  } else if (guess < randomNumber) {             // Check if guess is too low
    message.textContent = '🔺 Too low! Try higher'; // Show hint
    body.style.background = 'linear-gradient(135deg, #ff9a9e, #fecfef)'; // Change background to pink gradient
    attempts--;                                   // Deduct one attempt
  } else {                                        // Else guess must be too high
    message.textContent = '🔻 Too high! Try lower'; // Show hint
    body.style.background = 'linear-gradient(135deg, #f6d365, #fda085)'; // Change background to orange gradient
    attempts--;                                   // Deduct one attempt
  }

  attemptsSpan.textContent = attempts;           // Update displayed attempts

  if (attempts === 0 && guess !== randomNumber) { // Check if user ran out of attempts
    message.textContent = `❌ Game Over! The number was ${randomNumber}`; // Show game over message
    body.style.background = 'linear-gradient(135deg, #ff416c, #ff4b2b)'; // Change background to red gradient
    endGame();                                    // End game
  }

  guessInput.value = '';                          // Clear input box after each guess
});

// End game
function endGame() {                               // Function to end game
  guessBtn.style.display = 'none';                // Hide Guess button
  restartBtn.style.display = 'inline-block';     // Show Play Again button
}

// Restart game
restartBtn.addEventListener('click', () => {      // Add click listener to restart button
  initGame();                                     // Re-initialize the game
  confettiParticles = [];                         // Clear confetti array
});

// Confetti animation
function launchConfetti() {                        // Function to create confetti particles
  for (let i = 0; i < 150; i++) {                // Loop 150 times to create 150 particles
    confettiParticles.push({                      // Add new particle to array
      x: Math.random() * confettiCanvas.width,   // Random X position
      y: Math.random() * confettiCanvas.height - confettiCanvas.height, // Random Y above screen
      r: Math.random() * 6 + 4,                  // Radius of line particle
      d: Math.random() * 150 + 50,               // Density factor for movement
      color: `hsl(${Math.random() * 360}, 100%, 50%)`, // Random color using HSL
      tilt: Math.random() * 10 - 10,            // Initial tilt
      tiltAngleIncrement: Math.random() * 0.07 + 0.05 // Tilt speed
    });
  }
  requestAnimationFrame(updateConfetti);         // Start animation loop
}

function updateConfetti() {                        // Function to animate confetti
  ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height); // Clear canvas
  confettiParticles.forEach((p, i) => {           // Loop through each particle
    ctx.beginPath();                              // Start new drawing path
    ctx.lineWidth = p.r;                          // Set line width
    ctx.strokeStyle = p.color;                    // Set color
    ctx.moveTo(p.x + p.tilt + p.r / 2, p.y);     // Move to starting point
    ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r / 2); // Draw line
    ctx.stroke();                                 // Render line

    p.tilt += p.tiltAngleIncrement;              // Update tilt angle
    p.y += (Math.cos(p.d) + 3 + p.r / 2) * 0.5; // Move particle down

    if (p.y > confettiCanvas.height) {           // If particle falls below screen
      confettiParticles[i].y = -10;             // Reset Y above screen
      confettiParticles[i].x = Math.random() * confettiCanvas.width; // Random X
    }
  });
  if (confettiParticles.length > 0) {            // Continue animation if particles exist
    requestAnimationFrame(updateConfetti);       // Loop animation
  }
}

// Adjust canvas on resize
window.addEventListener('resize', () => {        // Event listener for window resize
  confettiCanvas.width = window.innerWidth;      // Update canvas width
  confettiCanvas.height = window.innerHeight;    // Update canvas height
});
