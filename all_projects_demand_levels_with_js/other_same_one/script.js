const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const resetBtn = document.getElementById("reset-btn");

let userScore = 0;
let computerScore = 0;

// Sounds
const winSound = new Audio("./sounds/win.mp3");
const loseSound = new Audio("./sounds/lose.mp3");
const drawSound = new Audio("./sounds/draw.mp3");

const genCompChoice = () =>
  ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];

const drawGame = () => {
  msg.innerText = "🤝 It's a Draw! Play again!";
  msg.style.backgroundColor = "#081b31";
  msgAnimate();
  drawSound.play();
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `🎉 You win! ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
    msgAnimate();
    winSound.play();
    confettiWin();
  } else {
    computerScore++;
    compScorePara.innerText = computerScore;
    msg.innerText = `😢 You lose! ${compChoice} beats ${userChoice}`;
    msg.style.backgroundColor = "red";
    msgAnimate();
    loseSound.play();
  }
};

const msgAnimate = () => {
  msg.style.transform = "scale(1.2)";
  setTimeout(() => {
    msg.style.transform = "scale(1)";
  }, 300);
};

const confettiWin = () => {
  const canvas = document.getElementById("confetti-canvas");
  confetti.create(canvas, { resize: true })({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
  });
};

const playGame = (userChoice) => {
  const compChoice = genCompChoice();

  // Animate choices
  const userElem = document.getElementById(userChoice);
  const compElem = document.getElementById(compChoice);
  userElem.style.transform = "scale(1.2) rotate(10deg)";
  compElem.style.transform = "scale(1.2) rotate(-10deg)";
  setTimeout(() => {
    userElem.style.transform = "scale(1) rotate(0deg)";
    compElem.style.transform = "scale(1) rotate(0deg)";
  }, 500);

  if (userChoice === compChoice) drawGame();
  else {
    let userWin = true;
    if (userChoice === "rock") userWin = compChoice === "paper" ? false : true;
    if (userChoice === "paper")
      userWin = compChoice === "scissors" ? false : true;
    if (userChoice === "scissors")
      userWin = compChoice === "rock" ? false : true;
    showWinner(userWin, userChoice, compChoice);
  }
};

// Choice Event
choices.forEach((choice) => {
  choice.addEventListener("click", () => playGame(choice.id));
});

// Reset Button
resetBtn.addEventListener("click", () => {
  userScore = 0;
  computerScore = 0;
  userScorePara.innerText = 0;
  compScorePara.innerText = 0;
  msg.innerText = "Game Reset! Make your move!";
  msg.style.backgroundColor = "#081b31";
});
