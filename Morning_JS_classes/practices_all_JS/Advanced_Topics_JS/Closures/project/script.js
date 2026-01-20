// ===============================
// 1️⃣ Private Counter using Closure
// ===============================

// Define a function named 'createCounter'
function createCounter() { 
    // Declare a variable named 'count' and initialize it to 0
    // This variable is local to 'createCounter' but remembered by the inner function (closure)
    let count = 0; // private variable preserved by closure

    // Return an anonymous inner function
    // This inner function forms the closure that can access 'count' even after outer function finishes
    return function() { 
        count++; // Increment the value of 'count' by 1
        return count; // Return the updated count value
    };
}

// Call 'createCounter' and store the returned inner function in 'counter'
// 'counter' is now a closure function that remembers 'count'
const counter = createCounter(); 

// Attach a click event listener to the button with id 'counterBtn'
document.getElementById("counterBtn").addEventListener("click", () => {
    const value = counter(); // Call closure to increment and get current count
    document.getElementById("counterValue").textContent = value; // Update HTML span with current count
});


// ===============================
// 2️⃣ Multiplier Factory using Closure
// ===============================

// Define a function named 'multiplier' that takes one parameter 'factor'
function multiplier(factor) { 
    // Return an inner function that takes one parameter 'number'
    // This inner function closes over 'factor'
    return function(number) { 
        return number * factor; // Multiply 'number' by the remembered 'factor' and return
    };
}

// Attach click event listener to the button with id 'multiplyBtn'
document.getElementById("multiplyBtn").addEventListener("click", () => {
    const factor = parseInt(document.getElementById("factorInput").value); // Read factor input and convert to integer
    const number = parseInt(document.getElementById("numberInput").value); // Read number input and convert to integer

    // Check if both inputs are valid numbers
    if (!isNaN(factor) && !isNaN(number)) {
        const multiplyFunc = multiplier(factor); // Create closure remembering factor
        const result = multiplyFunc(number); // Call inner function with number
        document.getElementById("multiplyResult").textContent = result; // Display result
    } else {
        alert("Please enter valid numbers!"); // Show alert if inputs invalid
    }
});


// ===============================
// 3️⃣ Memoization Example using Closure
// ===============================

// Define a function 'memoize' that takes a function 'fn' as parameter
function memoize(fn) { 
    const cache = {}; // Object to store cached results, remembered by closure

    // Return inner function that takes one parameter 'x'
    return function(x) { 
        // Check if result for 'x' is already in cache
        if (cache[x] !== undefined) { 
            console.log("Fetching from cache"); // Log cache hit
            return cache[x]; // Return cached result
        }

        // Calculate result as it is not in cache
        console.log("Calculating result");
        const result = fn(x); // Call original function
        cache[x] = result; // Store result in cache
        return result; // Return calculated result
    };
}

// Create a memoized version of square function
const square = memoize(x => x * x); 

// Attach click event listener to button with id 'memoBtn'
document.getElementById("memoBtn").addEventListener("click", () => {
    const x = parseInt(document.getElementById("memoInput").value); // Read input and convert to integer
    if (!isNaN(x)) { // Check if input is a valid number
        const result = square(x); // Call memoized function
        document.getElementById("memoResult").textContent = result; // Display result in HTML
    } else {
        alert("Please enter a valid number!"); // Alert for invalid input
    }
});
