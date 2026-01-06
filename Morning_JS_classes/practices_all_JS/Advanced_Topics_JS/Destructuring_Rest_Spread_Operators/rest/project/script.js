// 🗂 Array to store all expense objects
// Each expense will be an object like { category: 'Food', amount: 50 }
const expenses = [];

// 📌 Get DOM elements from the HTML by their IDs
const expenseForm = document.getElementById("expenseForm"); // Form for adding expenses
const expenseList = document.getElementById("expenseList"); // UL element to display all expenses
const totalEl = document.getElementById("total");           // Span to show total amount
const highestEl = document.getElementById("highest");       // Span to show highest expense
const averageEl = document.getElementById("average");       // Span to show average expense

// ➕ Event listener for submitting the expense form
expenseForm.addEventListener("submit", function(e) {
  e.preventDefault(); // Prevent page reload when form is submitted

  // 📌 Get input values from form fields
  const category = document.getElementById("category").value; // Expense category string
  const amount = Number(document.getElementById("amount").value); // Convert input to number

  // 💡 Create an expense object
  // This uses shorthand object property assignment { category: category, amount: amount }
  const expense = { category, amount };

  // 🔹 Add the expense object to the expenses array
  expenses.push(expense);

  // 🔹 Render the updated list of expenses on the page
  renderExpenses();

  // 🔹 Recalculate total, highest, and average amounts
  calculateSummary();

  // 🧹 Reset form inputs for the next entry
  expenseForm.reset();
});

// 🖊 Function to render all expenses dynamically in the UL
function renderExpenses() {
  expenseList.innerHTML = ""; // Clear the current list to avoid duplicates

  // ⚡ Destructuring the array into first item and the rest
  // first = first expense object
  // rest = array of remaining expense objects
  const [first, ...rest] = expenses;

  // ✅ Display the first expense with a star
  if(first) {
    const li = document.createElement("li"); // Create new list item element
    li.textContent = `⭐ ${first.category}: $${first.amount}`; // Add text content
    expenseList.appendChild(li); // Add item to the UL
  }

  // 🔹 Display the remaining expenses normally
  rest.forEach(exp => {
    const li = document.createElement("li"); // Create new list item
    li.textContent = `${exp.category}: $${exp.amount}`; // Add text content
    expenseList.appendChild(li); // Add to UL
  });
}

// 🧮 Function to calculate total, highest, and average expenses
function calculateSummary() {
  // 🔹 Extract all amounts from the expenses array using map
  // This returns an array of numbers [50, 100, 30]
  const amounts = expenses.map(exp => exp.amount);

  // 🔹 Calculate total using a custom sum function with rest operator
  // sum(...amounts) expands the array into separate numbers
  const total = sum(...amounts);

  // 🔹 Find the highest expense using Math.max with spread operator
  const highest = Math.max(...amounts);

  // 🔹 Calculate average and fix to 2 decimal places
  const average = amounts.length ? (total / amounts.length).toFixed(2) : 0;

  // 🔹 Update the DOM elements with calculated values
  totalEl.textContent = total;     // Total amount
  highestEl.textContent = highest; // Highest single expense
  averageEl.textContent = average; // Average expense
}

// ➕ Sum function using rest operator
// nums is a "rest parameter" that collects all arguments into an array
function sum(...nums) {
  // Reduce the array to a single value by summing all numbers
  return nums.reduce((a, b) => a + b, 0);
}
