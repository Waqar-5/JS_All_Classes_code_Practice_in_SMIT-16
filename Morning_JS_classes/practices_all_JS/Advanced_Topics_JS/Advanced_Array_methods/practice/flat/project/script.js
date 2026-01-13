// DOM Elements
const arrayInput = document.getElementById("arrayInput");
const depthSelect = document.getElementById("depthSelect");
const flattenBtn = document.getElementById("flattenBtn");
const resetBtn = document.getElementById("resetBtn");
const originalArrayEl = document.getElementById("originalArray");
const flattenedArrayEl = document.getElementById("flattenedArray");
const explanationEl = document.getElementById("explanation");

// Function to safely parse user input as array
function parseArray(input) {
    try {
        const parsed = eval(input); // eval converts string like "[1,[2]]" into array
        if (Array.isArray(parsed)) return parsed;
        else throw new Error("Input is not a valid array");
    } catch (err) {
        alert("Invalid array format! Example: [1, [2, [3,4]], 5]");
        return null;
    }
}

// Function to flatten array
function flattenArray() {
    const input = arrayInput.value.trim();
    const depth = depthSelect.value === "Infinity" ? Infinity : Number(depthSelect.value);

    const arr = parseArray(input);
    if (!arr) return;

    originalArrayEl.textContent = JSON.stringify(arr);

    const flattened = arr.flat(depth);
    flattenedArrayEl.textContent = JSON.stringify(flattened);

    // Explanation
    explanationEl.textContent = `
Flattened with depth = ${depth}.
Original array: ${JSON.stringify(arr)}
Flattened array: ${JSON.stringify(flattened)}
${depth === Infinity ? "All levels flattened completely!" : `Flattened up to ${depth} level(s).`}
    `;
}

// Reset function
function resetAll() {
    arrayInput.value = "";
    originalArrayEl.textContent = "[]";
    flattenedArrayEl.textContent = "[]";
    explanationEl.textContent = "Click \"Flatten Array\" to see the flattening process!";
}

// Event listeners
flattenBtn.addEventListener("click", flattenArray);
resetBtn.addEventListener("click", resetAll);
