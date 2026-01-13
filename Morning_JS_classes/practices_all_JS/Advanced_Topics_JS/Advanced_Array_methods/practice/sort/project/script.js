// let items = []; // "let" declares a variable, "items" is the variable name, "= []" assigns an empty array. This array stores all the items the user adds.
let items = []; 

// const itemInput = document.getElementById("itemInput"); 
// "const" declares a constant variable, "itemInput" stores reference to the HTML element with id 'itemInput'.
// getElementById("itemInput") finds the input field in HTML where user types items.
const itemInput = document.getElementById("itemInput");

// const itemList = document.getElementById("itemList"); 
// "itemList" stores reference to the HTML <ul> element where we display the items.
const itemList = document.getElementById("itemList");

// const addBtn = document.getElementById("addBtn"); 
// "addBtn" stores reference to the HTML <button> element which user clicks to add items.
const addBtn = document.getElementById("addBtn");

// -------------------- RENDER FUNCTION --------------------

// function render(highlightIndexes = []) { ... } 
// "function" defines a function named "render", "highlightIndexes = []" is an optional parameter (default empty array) to highlight certain items visually.
function render(highlightIndexes = []) {
  
  // itemList.innerHTML = ""; 
  // Clears the current HTML inside the <ul> before displaying updated items.
  itemList.innerHTML = "";

  // items.forEach((item, index) => { ... }); 
  // "forEach" loops through every element in the array "items".
  // "item" is the value, "index" is the position of the item in the array.
  items.forEach((item, index) => {
    
    // let li = document.createElement("li"); 
    // Creates a new HTML <li> element for each item.
    let li = document.createElement("li");

    // li.textContent = item; 
    // Sets the text inside the <li> to the actual value of the item.
    li.textContent = item;

    // if (highlightIndexes.includes(index)) { ... } 
    // Checks if this item's index is in "highlightIndexes" array.
    // If yes, we highlight it to show it's being compared or swapped.
    if (highlightIndexes.includes(index)) {

      // li.style.backgroundColor = "#ffeb3b"; 
      // Sets the background color of <li> to yellow for highlighting.
      li.style.backgroundColor = "#ffeb3b"; // Yellow highlight
    }

    // itemList.appendChild(li); 
    // Adds the <li> element into the <ul> in HTML.
    itemList.appendChild(li);
  });
}

// -------------------- ADD ITEM FUNCTION --------------------

// addBtn.addEventListener("click", () => { ... }); 
// "addEventListener" listens for a click on addBtn. 
// When user clicks, it runs the function defined inside "() => { ... }".
addBtn.addEventListener("click", () => {
  
  // let value = itemInput.value.trim(); 
  // "value" gets the text inside input field, "trim()" removes extra spaces before/after.
  let value = itemInput.value.trim();

  // if(value !== "") { ... } 
  // Checks if user actually typed something (not empty).
  if(value !== "") {

    // items.push(value); 
    // Adds the new value at the end of "items" array.
    items.push(value);

    // itemInput.value = ""; 
    // Clears the input field after adding the item.
    itemInput.value = "";

    // render(); 
    // Calls the render function to show updated list with new item.
    render();
  }
});

// -------------------- SORT FUNCTIONS --------------------

// async function animateSort(compareFn) { ... } 
// "async" means this function can pause with "await". 
// "animateSort" performs sorting with animation. 
// "compareFn" is a function that defines how to compare two items.
async function animateSort(compareFn) {

  // Outer loop: for (let i = 0; i < items.length; i++) { ... } 
  // Loops through all items. Controls how many passes needed for sorting.
  for (let i = 0; i < items.length; i++) {

    // Inner loop: for (let j = 0; j < items.length - 1 - i; j++) { ... } 
    // Loops through each adjacent pair of items in the array.
    for (let j = 0; j < items.length - 1 - i; j++) {

      // if (compareFn(items[j], items[j + 1]) > 0) { ... } 
      // Calls compareFn to compare two adjacent items. 
      // If result > 0, it means first item should come after second, so swap.
      if (compareFn(items[j], items[j + 1]) > 0) {

        // [items[j], items[j + 1]] = [items[j + 1], items[j]]; 
        // Swaps the two items using array destructuring.
        [items[j], items[j + 1]] = [items[j + 1], items[j]];

        // render([j, j + 1]); 
        // Calls render function and highlights the two items that were swapped.
        render([j, j + 1]);

        // await new Promise(resolve => setTimeout(resolve, 300)); 
        // Pauses the loop for 300 milliseconds so animation can be seen.
        await new Promise(resolve => setTimeout(resolve, 300));
      }
    }
  }
}

// -------------------- SPECIFIC SORT BUTTON FUNCTIONS --------------------

// Alphabetical A → Z
function sortAlphabetical() {
  // Calls animateSort with compare function that uses localeCompare for text
  animateSort((a, b) => a.toString().localeCompare(b.toString()));
}

// Reverse Z → A
function sortReverse() {
  animateSort((a, b) => b.toString().localeCompare(a.toString()));
}

// By Length
function sortByLength() {
  // Compare function subtracts lengths of strings
  animateSort((a, b) => a.toString().length - b.toString().length);
}

// Numbers ascending
function sortNumbersAsc() {
  // Convert items to numbers, then subtract for comparison
  animateSort((a, b) => Number(a) - Number(b));
}

// Numbers descending
function sortNumbersDesc() {
  animateSort((a, b) => Number(b) - Number(a));
}
