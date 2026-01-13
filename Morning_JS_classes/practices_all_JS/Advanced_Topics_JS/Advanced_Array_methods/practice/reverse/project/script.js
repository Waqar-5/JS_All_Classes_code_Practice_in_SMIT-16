// =======================
// REVERSE STRING SECTION
// =======================

// Get the input field where the user will type a string
const stringInput = document.getElementById("stringInput"); 

// Get the button that will trigger the string reversal
const reverseStringBtn = document.getElementById("reverseStringBtn"); 

// Get the span element where we will display the original string
const originalString = document.getElementById("originalString"); 

// Get the span element where we will display the reversed string
const reversedString = document.getElementById("reversedString"); 

// Add a click event listener to the reverse string button
reverseStringBtn.addEventListener("click", () => { 
  let str = stringInput.value;           // Get the current value from the input field
  originalString.textContent = str;      // Display the original string in the page

  // Split the string into an array of characters, reverse the array, and join it back to string
  let reversed = str.split("").reverse().join(""); 
  reversedString.textContent = reversed; // Display the reversed string in the page
});



// =======================
// REVERSE NUMBER SECTION
// =======================

// Get the input field where the user will type a number
const numberInput = document.getElementById("numberInput"); 

// Get the button that will trigger the number reversal
const reverseNumberBtn = document.getElementById("reverseNumberBtn"); 

// Get the span element where we will display the original number
const originalNumber = document.getElementById("originalNumber"); 

// Get the span element where we will display the reversed number
const reversedNumber = document.getElementById("reversedNumber"); 

// Add a click event listener to the reverse number button
reverseNumberBtn.addEventListener("click", () => {
  let num = numberInput.value;               // Get the number input as a string
  originalNumber.textContent = num;          // Display the original number

  // Convert number to string, split into array, reverse, join back, convert to number
  let reversedNum = Number(num.toString().split("").reverse().join("")); 
  reversedNumber.textContent = reversedNum;  // Display the reversed number
});



// =======================
// REVERSE ARRAY SECTION
// =======================

// Get the input field where user types array items separated by comma
const arrayInput = document.getElementById("arrayInput"); 

// Get the button to trigger array reversal
const reverseArrayBtn = document.getElementById("reverseArrayBtn"); 

// Get the span element to show original array
const originalArray = document.getElementById("originalArray"); 

// Get the span element to show reversed array
const reversedArray = document.getElementById("reversedArray"); 

// Add click listener to reverse array button
reverseArrayBtn.addEventListener("click", () => {
  // Split input string by comma to make an array, and trim spaces from each item
  let arr = arrayInput.value.split(",").map(item => item.trim()); 
  originalArray.textContent = `[${arr.join(", ")}]`; // Display original array

  // Create a reversed copy of array using spread operator and reverse()
  let reversedArr = [...arr].reverse(); 
  reversedArray.textContent = `[${reversedArr.join(", ")}]`; // Display reversed array
});



// =======================
// REVERSE WORDS IN SENTENCE SECTION
// =======================

// Get input field where user types a sentence
const sentenceInput = document.getElementById("sentenceInput"); 

// Get button to reverse words in sentence
const reverseSentenceBtn = document.getElementById("reverseSentenceBtn"); 

// Get span element to show original sentence
const originalSentence = document.getElementById("originalSentence"); 

// Get span element to show reversed sentence
const reversedSentence = document.getElementById("reversedSentence"); 

// Add click event listener to reverse sentence button
reverseSentenceBtn.addEventListener("click", () => {
  let sentence = sentenceInput.value;               // Get sentence from input field
  originalSentence.textContent = sentence;          // Show original sentence

  // Split sentence into words, reverse the order of words, join them back into a string
  let reversedWords = sentence.split(" ").reverse().join(" "); 
  reversedSentence.textContent = reversedWords;    // Show reversed words
});
