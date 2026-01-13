

// -------------------- NUMBERS SECTION --------------------

// Array to store numbers entered by the user
let numbers = [];

// DOM elements for the numbers section
const numInput = document.getElementById("numInput");       // Input field to type a number
const addNumBtn = document.getElementById("addNumBtn");     // Button to add number to array
const numList = document.getElementById("numList");         // Span to display the array of numbers
const checkEvenBtn = document.getElementById("checkEvenBtn"); // Button to check if all numbers are even
const numResult = document.getElementById("numResult");     // Span to show the result (true/false)

// Event listener to add a number to the array
addNumBtn.addEventListener("click", () => {
    const value = parseInt(numInput.value); // Convert input value to integer
    if (!isNaN(value)) {                    // Check if the input is a valid number
        numbers.push(value);                // Add number to the array
        numList.textContent = JSON.stringify(numbers); // Update the numbers list on UI
        numInput.value = "";                // Clear the input field
        numInput.focus();                   // Focus back to input for fast entry
    }
});

// Event listener to check if all numbers are even using every()
checkEvenBtn.addEventListener("click", () => {
    const result = numbers.every(num => num % 2 === 0); // Check every number in the array
    // Update result with emoji and text for clarity
    numResult.textContent = result ? "✅ True" : "❌ False"; 
    // Apply class for styling (green for true, red for false)
    numResult.className = result ? "true" : "false";     
});

// -------------------- WORDS SECTION --------------------

// Array to store words entered by the user
let words = [];

// DOM elements for the words section
const wordInput = document.getElementById("wordInput");       // Input field to type a word
const letterInput = document.getElementById("letterInput");   // Input field to type a letter for checking
const addWordBtn = document.getElementById("addWordBtn");     // Button to add word to array
const wordList = document.getElementById("wordList");         // Span to display the array of words
const checkLetterBtn = document.getElementById("checkLetterBtn"); // Button to check if all words start with letter
const wordResult = document.getElementById("wordResult");     // Span to show the result (true/false)

// Event listener to add a word to the array
addWordBtn.addEventListener("click", () => {
    const word = wordInput.value.trim(); // Remove extra spaces
    if (word) {                          // Ensure the input is not empty
        words.push(word);                // Add word to the array
        wordList.textContent = JSON.stringify(words); // Update words list on UI
        wordInput.value = "";            // Clear input field
        wordInput.focus();               // Focus back to input for quick entry
    }
});

// Event listener to check if all words start with the specified letter
checkLetterBtn.addEventListener("click", () => {
    const letter = letterInput.value.trim(); // Get the letter to check
    if (letter) {                            // Ensure a letter is entered
        const result = words.every(word => word[0].toLowerCase() === letter.toLowerCase());
        // Check each word: first character (word[0]) equals the input letter (case-insensitive)
        // Update result with emoji and text
        wordResult.textContent = result ? "✅ True" : "❌ False";
        // Apply class for styling (green for true, red for false)
        wordResult.className = result ? "true" : "false";
    }
});

// -------------------- FORM FIELD SECTION --------------------

// Select all input fields in the form section
const formFields = document.querySelectorAll(".formField"); // NodeList of all input fields
const checkFormBtn = document.getElementById("checkFormBtn"); // Button to check if all fields are filled
const formResult = document.getElementById("formResult");     // Span to show the result (true/false)

// Event listener to check if all form fields are filled
checkFormBtn.addEventListener("click", () => {
    const result = Array.from(formFields)               // Convert NodeList to Array
        .every(field => field.value.trim() !== "");    // Check each field is not empty (trim removes spaces)
    // Update result with emoji and text
    formResult.textContent = result ? "✅ True" : "❌ False";
    // Apply class for styling (green for true, red for false)
    formResult.className = result ? "true" : "false";
});
