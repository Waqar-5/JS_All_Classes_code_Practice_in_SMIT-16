// ==========================
// ARRAY.FROM() FUN TRANSFORMER
// ==========================

const userInput = document.getElementById('userInput');
const transformBtn = document.getElementById('transformBtn');
const arrayOutput = document.getElementById('arrayOutput');
const transformedOutput = document.getElementById('transformedOutput');

let mainArray = [];

// Convert user input to array using Array.from()
transformBtn.addEventListener('click', () => {
    const input = userInput.value.trim();
    if (!input) return alert("Please enter something!");

    // Split by comma or space to get elements
    const rawArray = input.includes(',') ? input.split(',') : input.split(' ');

    // Use Array.from to create real array
    mainArray = Array.from(rawArray, el => el.trim());
    
    arrayOutput.textContent = JSON.stringify(mainArray);
    transformedOutput.textContent = JSON.stringify(mainArray);
});

// ----------- TRANSFORM BUTTONS -----------

// Sort Alphabetically
document.getElementById('sortAlpha').addEventListener('click', () => {
    const sorted = [...mainArray].sort();
    transformedOutput.textContent = JSON.stringify(sorted);
});

// Sort Numerically
document.getElementById('sortNum').addEventListener('click', () => {
    const numericArray = mainArray.map(Number).filter(n => !isNaN(n));
    const sorted = numericArray.sort((a, b) => a - b);
    transformedOutput.textContent = JSON.stringify(sorted);
});

// Reverse Array
document.getElementById('reverseBtn').addEventListener('click', () => {
    transformedOutput.textContent = JSON.stringify([...mainArray].reverse());
});

// Shuffle Array
document.getElementById('shuffleBtn').addEventListener('click', () => {
    const shuffled = [...mainArray].sort(() => Math.random() - 0.5);
    transformedOutput.textContent = JSON.stringify(shuffled);
});

// Uppercase Transformation
document.getElementById('upperBtn').addEventListener('click', () => {
    const upper = mainArray.map(el => String(el).toUpperCase());
    transformedOutput.textContent = JSON.stringify(upper);
});

// Lowercase Transformation
document.getElementById('lowerBtn').addEventListener('click', () => {
    const lower = mainArray.map(el => String(el).toLowerCase());
    transformedOutput.textContent = JSON.stringify(lower);
});
