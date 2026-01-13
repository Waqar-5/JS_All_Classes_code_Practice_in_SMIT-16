// ----------------------------
// Original snack array
// This is the main array containing all the snack items.
// We'll use this array for slicing operations.
const snacks = ["Chips", "Cookies", "Chocolate", "Candy", "Nuts", "Popcorn", "Pretzels", "Granola"];

// ----------------------------
// Get references to DOM elements
// These are the HTML elements we'll interact with in JS.

// UL element to display the original array
const originalList = document.getElementById("originalList");

// UL element to display the sliced array
const slicedList = document.getElementById("slicedList");

// Input elements for start and end indices for slicing
const startIndexInput = document.getElementById("startIndex");
const endIndexInput = document.getElementById("endIndex");

// Buttons to perform actions
const sliceBtn = document.getElementById("sliceBtn");       // Normal slice
const reverseBtn = document.getElementById("reverseBtn");   // Slice then reverse

// Inputs and elements for slicing snack names (strings)
const snackNameInput = document.getElementById("snackNameInput"); // Text input for a snack name
const stringStart = document.getElementById("stringStart");       // Start index for string slice
const stringEnd = document.getElementById("stringEnd");           // End index for string slice
const sliceNameBtn = document.getElementById("sliceNameBtn");     // Button to slice snack name
const slicedName = document.getElementById("slicedName");         // Paragraph to display sliced string

// ----------------------------
// Function to display array items in a UL
// array -> the array to display
// element -> the UL element where items will be appended
function displayArray(array, element) {
  element.innerHTML = ""; // Clear previous content before adding new items
  array.forEach(item => {
    const li = document.createElement("li"); // Create a list item for each array element
    li.textContent = item;                  // Set the text of the li to the array item
    element.appendChild(li);                // Add li to the UL
  });
}

// ----------------------------
// Initially display the original snacks array
displayArray(snacks, originalList); // This shows the full list when page loads

// ----------------------------
// Normal Slice Button
// When clicked, it slices the array from start to end index
sliceBtn.addEventListener("click", () => {
  // Get values from input and convert to integers
  const start = parseInt(startIndexInput.value);
  const end = parseInt(endIndexInput.value);

  // Validate inputs: check if start or end are not numbers
  if (isNaN(start) || (endIndexInput.value && isNaN(end))) {
    alert("Enter valid indices!"); // Show alert if inputs are invalid
    return; // Stop execution
  }

  // Use slice to extract a portion of the snacks array
  // slice(start, end) does NOT modify the original array
  const sliced = snacks.slice(start, end);

  // Display the sliced array in the slicedList UL
  displayArray(sliced, slicedList);
});

// ----------------------------
// Reverse Slice Button
// When clicked, it slices the array and then reverses the sliced portion
reverseBtn.addEventListener("click", () => {
  const start = parseInt(startIndexInput.value);
  const end = parseInt(endIndexInput.value);

  // Slice the array and then reverse it
  // This is a common pattern to reverse a selected portion
  const reversed = snacks.slice(start, end).reverse();

  // Display the reversed sliced array
  displayArray(reversed, slicedList);
});

// ----------------------------
// Slice Snack Name (String slicing)
// This demonstrates slice() on strings instead of arrays
sliceNameBtn.addEventListener("click", () => {
  const snack = snackNameInput.value; // Get the snack name entered by the user
  const start = parseInt(stringStart.value); // Start index for slicing the string
  const end = parseInt(stringEnd.value);     // End index for slicing the string

  // Validate: check if user entered a snack name
  if (!snack) return alert("Enter a snack name!");

  // Slice the string from start to end
  // Strings behave similar to arrays with slice()
  const slicedStr = snack.slice(start, end);

  // Display the sliced string in the paragraph
  slicedName.textContent = `Sliced Name: "${slicedStr}"`;
});


/*
Extra Notes to Remember

slice() is non-destructive → original array/string stays unchanged.

slice(start, end) → includes start, excludes end.

Negative indices in slice() → count from the end (-1 is the last element).

You can slice arrays or strings with the same method.

Combining slice with other methods like .reverse() or .map() is common in real projects.
*/