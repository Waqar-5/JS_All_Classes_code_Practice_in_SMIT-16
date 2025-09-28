// *********************************************************
// Interactive Quiz Game - Node.js Version (All JS Function Types)
// *********************************************************

console.log("*********** Interactive Quiz Game ***********");

// ========================================================
// 0. Node.js prompt setup
// ========================================================
const prompt = require('prompt-sync')({sigint: true});

// ========================================================
// 1. IIFE (Immediately Invoked Function Expression)
// Initializes the quiz
// ========================================================
(function initQuiz() {
    console.log("Welcome to the Interactive Quiz Game!");
})();

// ========================================================
// 2. Constructor Function + Method Functions
// Used to create a question object
// ========================================================
function Question(questionText, options, correctAnswer) {
    this.questionText = questionText;
    this.options = options;
    this.correctAnswer = correctAnswer;
    this.userAnswer = null;

    // Method Function: ask question
    this.ask = function() {
        console.log(this.questionText);
        this.options.forEach((opt, index) => console.log(`${index + 1}. ${opt}`));
    };

    // Method Function: check answer
    this.checkAnswer = function(answer) {
        this.userAnswer = answer;
        return this.userAnswer === this.correctAnswer;
    };
}

// ========================================================
// 3. Named Function
// Function to display quiz score
// ========================================================
function showScore(score, total) {
    console.log(`Your score: ${score} / ${total}`);
}

// ========================================================
// 4. Anonymous Function
// Store questions in array and shuffle
// ========================================================
var questions = [
    new Question("What is JS?", ["Language", "Car", "Animal"], "Language"),
    new Question("Who created JS?", ["Brendan Eich", "Elon Musk", "Bill Gates"], "Brendan Eich"),
    new Question("JS stands for?", ["JavaScript", "Just Script", "JavaSystem"], "JavaScript")
];

// Shuffle using anonymous function
questions.sort(function() {
    return 0.5 - Math.random();
});

// ========================================================
// 5. Arrow Function
// Get correct answers only
// ========================================================
const correctQuestions = questions.filter(q => q.correctAnswer);
console.log("Questions loaded:", correctQuestions.length);

// ========================================================
// 6. Callback Function
// Function passed to another function
// ========================================================
function processQuiz(questionsArray, callback) {
    let score = 0;
    questionsArray.forEach(function(q) {
        let userInput = prompt(`${q.questionText}\nOptions: ${q.options.join(", ")}`);
        if (callback(q, userInput)) score++;
    });
    return score;
}

// ========================================================
// 7. Recursive Function
// Simple recursive countdown before quiz starts
// ========================================================
function countdown(n) {
    if (n === 0) {
        console.log("Go!");
        return;
    }
    console.log(n);
    countdown(n - 1);
}

countdown(3);

// ========================================================
// 8. Generator Function
// To iterate questions one by one
// ========================================================
function* questionGenerator(questionsArray) {
    for (let q of questionsArray) {
        yield q;
    }
}

const qGen = questionGenerator(questions);

// ========================================================
// 9. Async Function
// Simulate saving score online
// ========================================================
async function saveScore(score) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Score saved online: " + score);
            resolve(true);
        }, 2000);
    });
}

// ========================================================
// 10. Higher-Order Function
// Function returning another function
// ========================================================
function answerValidator(answer) {
    return function(q) {
        return q.checkAnswer(answer);
    };
}

// ========================================================
// 11. Nested Function
// Function inside another function
// ========================================================
function quizSummary(questionsArray) {
    function countCorrect() {
        return questionsArray.filter(q => q.userAnswer === q.correctAnswer).length;
    }
    console.log("Quiz Completed!");
    console.log(`Total Correct Answers: ${countCorrect()} / ${questionsArray.length}`);
}

// ========================================================
// 12. Dynamic / Anonymous Class Methods
// Add new method to Question dynamically
// ========================================================
Question.prototype.showCorrectAnswer = function() {
    console.log(`Correct Answer: ${this.correctAnswer}`);
};

// ========================================================
// 13. Using all together: main quiz execution
// ========================================================
let score = 0;
let currentQ = qGen.next();
while (!currentQ.done) {
    currentQ.value.ask(); // Method function
    let answer = prompt("Type your answer:");
    currentQ.value.userAnswer = answer; // parameter usage
    if (currentQ.value.checkAnswer(answer)) { // return and parameter usage
        console.log("Correct!");
        score++;
    } else {
        console.log("Wrong!");
        currentQ.value.showCorrectAnswer(); // dynamic method
    }
    currentQ = qGen.next();
}

// Nested function usage
quizSummary(questions);

// Async function usage to save score
(async () => {
    await saveScore(score);
})();

console.log("*********** End of Interactive Quiz Game ***********");
