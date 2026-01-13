// ===== Get HTML elements =====
const inputArray = document.getElementById("inputArray");       // Input field for array
const conditionType = document.getElementById("conditionType"); // Dropdown for condition selection
const customSection = document.getElementById("customSection"); // Optional custom input field
const customCondition = document.getElementById("customCondition"); // Input for custom JS
const checkBtn = document.getElementById("checkBtn");           // Button to run .some()
const result = document.getElementById("result");               // Display result

// ===== Show custom input if "Custom" is selected =====
conditionType.addEventListener("change", () => {
  if (conditionType.value === "custom") {
    customSection.style.display = "block"; // Show custom input
  } else {
    customSection.style.display = "none";  // Hide custom input
  }
});

// ===== Main check function =====
checkBtn.addEventListener("click", () => {

  // 1️⃣ Get array input from user
  let arr = inputArray.value.split(",").map(item => item.trim()); 
  // Split by comma and remove extra spaces

  // 2️⃣ Convert numeric strings to numbers if possible
  arr = arr.map(item => isNaN(item) ? item : Number(item));

  // 3️⃣ Get selected condition
  let condition = conditionType.value;

  // 4️⃣ Initialize result variable
  let checkResult = false;

  // 5️⃣ Run different checks based on selection
  if (condition === "numberGreaterThan10") {
    // Check if at least one number > 10
    checkResult = arr.some(item => typeof item === "number" && item > 10);
  } else if (condition === "isEven") {
    // Check if at least one number is even
    checkResult = arr.some(item => typeof item === "number" && item % 2 === 0);
  } else if (condition === "containsA") {
    // Check if at least one string contains 'a'
    checkResult = arr.some(item => typeof item === "string" && item.toLowerCase().includes("a"));
  } else if (condition === "lengthGreater3") {
    // Check if at least one string has length > 3
    checkResult = arr.some(item => typeof item === "string" && item.length > 3);
  } else if (condition === "custom") {
    // Custom JS condition: user types a condition using "item"
    try {
      checkResult = arr.some(item => eval(customCondition.value)); 
      // eval() executes the custom JS safely inside some()
    } catch (err) {
      result.textContent = "❌ Invalid custom JS condition!";
      return; // Stop if error
    }
  }

  // 6️⃣ Show result visually
  result.textContent = checkResult 
    ? "✅ At least one element passes the test!"
    : "❌ No element passes the test.";
});
