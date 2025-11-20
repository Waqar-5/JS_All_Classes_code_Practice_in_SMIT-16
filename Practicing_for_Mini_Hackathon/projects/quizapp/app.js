const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const nextBtn = document.getElementById('nextBtn');
const timerEl = document.getElementById('timer');
const scoreEl = document.getElementById('score');
const resultEl = document.getElementById('result');

const quiz = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Rome"],
    answer: "Paris"
  },
  {
    question: "Which language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    answer: "JavaScript"
  },
  {
    question: "What does CSS stand for?",
    options: ["Creative Style Sheets", "Cascading Style Sheets", "Colorful Style Sheets", "Computer Style Sheets"],
    answer: "Cascading Style Sheets"
  },
  {
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "Hyperlinks and Text Markup Language", "Home Tool Markup Language", "Hyper Trainer Markup Language"],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "Inside which HTML element do we put the JavaScript?",
    options: ["<javascript>", "<js>", "<script>", "<scripting>"],
    answer: "<script>"
  }
];

let currentQuestion = 0;
let score = 0;
let timeLeft = 60;
let timer;

// Start Timer
function startTimer() {
  timer = setInterval(() => {
    timeLeft--;
    timerEl.textContent = `Time: ${timeLeft}s`;
    if (timeLeft <= 0) {
      clearInterval(timer);
      showResult();
    }
  }, 1000);
}

// Render question
function renderQuestion() {
  const q = quiz[currentQuestion];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = '';
  q.options.forEach(option => {
    const btn = document.createElement('button');
    btn.className = 'btn btn-outline-primary w-100';
    btn.textContent = option;
    btn.addEventListener('click', () => selectOption(option));
    optionsEl.appendChild(btn);
  });
}

// Option selected
function selectOption(option) {
  const correct = quiz[currentQuestion].answer;
  if (option === correct) score += 10;
  scoreEl.textContent = `Score: ${score}`;
  // Disable buttons
  Array.from(optionsEl.children).forEach(btn => btn.disabled = true);
}

// Next Question
nextBtn.addEventListener('click', () => {
  currentQuestion++;
  if (currentQuestion >= quiz.length) {
    showResult();
  } else {
    renderQuestion();
  }
});

// Show Result
function showResult() {
  clearInterval(timer);
  questionEl.textContent = "Quiz Completed!";
  optionsEl.innerHTML = '';
  nextBtn.disabled = true;
  resultEl.classList.remove('d-none');
  resultEl.textContent = `Your Final Score: ${score} / ${quiz.length * 10}`;
}

// Initialize
renderQuestion();
startTimer();
scoreEl.textContent = `Score: ${score}`;
