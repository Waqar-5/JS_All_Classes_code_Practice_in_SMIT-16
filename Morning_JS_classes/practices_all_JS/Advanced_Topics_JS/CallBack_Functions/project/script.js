// ================================
// Recipe Step Executor with SweetAlert
// ================================

// Select DOM elements
const startBtn = document.getElementById("startBtn"); // Selects the Start Cooking button
const restartBtn = document.getElementById("restartBtn"); // Selects the Restart button
const recipeNameInput = document.getElementById("recipeName"); // Selects the input field for recipe name
const stepsList = document.getElementById("stepsList"); // Selects the ul element where recipe steps will appear

// Recipes data
const recipes = {
  "HALWA PURI": [ // Recipe name as key
    "Prepare the halwa ingredients", // Step 1
    "Boil water for puri",           // Step 2
    "Fry puris until golden",        // Step 3
    "Cook halwa until thick",        // Step 4
    "Serve halwa and puris together" // Step 5
  ],
  "CHICKEN BIRYANI": [
    "Marinate chicken with spices",
    "Fry onions until golden",
    "Cook rice partially",
    "Layer rice and chicken",
    "Cook on low flame",
    "Serve hot with raita"
  ],
  "CHANA MASALA": [
    "Soak chickpeas overnight",
    "Boil chickpeas until soft",
    "Prepare onion-tomato masala",
    "Add chickpeas to masala",
    "Cook for 15 minutes",
    "Serve with roti or rice"
  ],
  "KEEMA NAAN": [
    "Cook minced meat with spices",
    "Prepare dough for naan",
    "Roll dough and fill with keema",
    "Bake or fry naan",
    "Serve hot"
  ],
  "GULAB JAMUN": [
    "Prepare dough balls",
    "Fry dough balls until golden",
    "Boil sugar syrup",
    "Soak fried balls in syrup",
    "Serve warm"
  ]
};

// ================================
// START BUTTON EVENT LISTENER
// ================================
startBtn.addEventListener("click", () => { // When Start button is clicked
  let recipeName = recipeNameInput.value.trim().toUpperCase(); 
  // Get input value, remove extra spaces, and convert to uppercase for consistent matching

  stepsList.innerHTML = ""; 
  // Clear any previous steps displayed in the UI

  if (!recipes[recipeName]) { 
    // Check if recipe exists in the recipes object
    // If not, show SweetAlert error
    Swal.fire({
      icon: 'error', // Error icon
      title: 'Oops...', // Title text
      text: 'Recipe not found! Please enter a valid recipe.', // Message
    });
    return; // Stop further execution
  }

  // Execute steps recursively using a callback function
  executeSteps(recipes[recipeName], 0, () => {
    // This callback runs only after all steps are completed
    Swal.fire({
      icon: 'success', // Success icon
      title: 'Recipe Completed!', // Title
      text: '✅ Enjoy your meal 🍽️', // Message
      timer: 2000, // Auto-close after 2 seconds
      showConfirmButton: false // Hide "OK" button
    });
  });
});

// ================================
// RESTART BUTTON EVENT LISTENER
// ================================
restartBtn.addEventListener("click", () => { // When Restart button is clicked
  recipeNameInput.value = ""; // Clear the input field
  stepsList.innerHTML = "";   // Clear all steps displayed

  // Inform user using SweetAlert
  Swal.fire({
    icon: 'info', // Info icon
    title: 'Restarted!', // Title
    text: 'You can now enter a new recipe.', // Message
    timer: 1500, // Auto-close after 1.5 seconds
    showConfirmButton: false // Hide "OK" button
  });
});

// ================================
// RECURSIVE FUNCTION TO EXECUTE STEPS
// ================================
function executeSteps(steps, index, callback) { 
  // 'steps' → array of recipe steps
  // 'index' → current step position
  // 'callback' → function to call after all steps completed

  if (index >= steps.length) { 
    // Base case: if index exceeds total steps
    callback(); // Call the final callback to show completion alert
    return; // Exit function
  }

  const li = document.createElement("li"); 
  // Create a new <li> element for the current step

  li.textContent = steps[index]; 
  // Set <li> text to the current step from array

  stepsList.appendChild(li); 
  // Add the <li> to the ul in the UI

  setTimeout(() => { // Simulate asynchronous delay (like real cooking)
    li.style.backgroundColor = "#c8e6c9"; // Mark step as completed (green background)

    executeSteps(steps, index + 1, callback); 
    // Recursive call to execute the next step
    // The callback ensures the sequence continues until all steps are done
  }, 1500); // 1.5 seconds delay for each step
}
