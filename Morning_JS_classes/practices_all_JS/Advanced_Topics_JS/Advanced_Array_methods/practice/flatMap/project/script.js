// ======= Nested Data =======
const users = [
    { name: "Alice", hobbies: ["Reading", "Swimming"], skills: ["JS", "CSS"] },
    { name: "Bob", hobbies: ["Cycling"], skills: ["Python", "SQL"] },
    { name: "Charlie", hobbies: ["Gaming", "Drawing"], skills: ["HTML", "JS"] },
];

// ======= DOM Elements =======
const nestedDataEl = document.getElementById("nestedData");
const flattenedDataEl = document.getElementById("flattenedData");
const flattenBtn = document.getElementById("flattenBtn");
const sortAlphaBtn = document.getElementById("sortAlphaBtn");
const sortLengthBtn = document.getElementById("sortLengthBtn");
const filterInput = document.getElementById("filterInput");

// Display original nested data
nestedDataEl.textContent = JSON.stringify(users, null, 2);

// ======= Flatten Function using flatMap =======
let flattenedData = []; // global variable to store flattened data

function flattenData() {
    // Using flatMap to extract hobbies + skills of all users
    flattenedData = users.flatMap(user => [...user.hobbies, ...user.skills]);

    // Display
    flattenedDataEl.textContent = JSON.stringify(flattenedData, null, 2);
}

// ======= Sort Alphabetically =======
function sortAlphabetically() {
    flattenedData.sort((a, b) => a.localeCompare(b));
    flattenedDataEl.textContent = JSON.stringify(flattenedData, null, 2);
}

// ======= Sort by Length =======
function sortByLength() {
    flattenedData.sort((a, b) => a.length - b.length);
    flattenedDataEl.textContent = JSON.stringify(flattenedData, null, 2);
}

// ======= Filter =======
filterInput.addEventListener("input", () => {
    const filterText = filterInput.value.toLowerCase();
    const filtered = flattenedData.filter(item => item.toLowerCase().includes(filterText));
    flattenedDataEl.textContent = JSON.stringify(filtered, null, 2);
});

// ======= Event Listeners =======
flattenBtn.addEventListener("click", flattenData);
sortAlphaBtn.addEventListener("click", sortAlphabetically);
sortLengthBtn.addEventListener("click", sortByLength);
