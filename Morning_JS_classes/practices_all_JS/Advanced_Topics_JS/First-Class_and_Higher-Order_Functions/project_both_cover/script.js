// ===========================
// 1️⃣ First-Class Functions (FCF)
// ===========================
function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) { return b === 0 ? "Cannot divide by zero" : a / b; }
function power(a, b) { return Math.pow(a, b); }

// Store functions in an object (FCF in action)
const operations = { add, subtract, multiply, divide, power };

// ===========================
// 2️⃣ Higher-Order Function (HOF)
// ===========================

// HOF that executes any operation passed as callback
function calculate(a, b, operationCallback) {
    return operationCallback(a, b); // execute callback
}

// ===========================
// 3️⃣ Handle UI Interactions
// ===========================
const buttons = document.querySelectorAll(".operations button");
const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const resultValue = document.getElementById("resultValue");
const conceptValue = document.getElementById("conceptValue");

// Loop through all buttons
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const opName = button.dataset.op; // get operation name from button
        const num1 = parseFloat(num1Input.value);
        const num2 = parseFloat(num2Input.value);

        // Use HOF + FCF + Callback
        const result = calculate(num1, num2, operations[opName]);

        // Display result
        resultValue.textContent = result;

        // Show concepts used
        conceptValue.textContent = `
            Function Passed as Argument → Callback
            | calculate() → Higher-Order Function
            | ${opName}() → First-Class Function
        `;
    });
});
