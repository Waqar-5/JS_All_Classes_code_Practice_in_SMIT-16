// Array to store items
let items = [];

// DOM Elements
const itemInput = document.getElementById("itemInput");
const addBtn = document.getElementById("addBtn");
const itemList = document.getElementById("itemList");

const searchInput = document.getElementById("searchInput");
const updateInput = document.getElementById("updateInput");
const updateBtn = document.getElementById("updateBtn");

const deleteInput = document.getElementById("deleteInput");
const deleteBtn = document.getElementById("deleteBtn");

// Function to display items in the list
function displayItems() {
    itemList.innerHTML = ""; // Clear previous items
    items.forEach((item, index) => {
        const li = document.createElement("li");
        li.textContent = `${index}: ${item}`;
        itemList.appendChild(li);
    });
}

// Add new item
addBtn.addEventListener("click", () => {
    const item = itemInput.value.trim();
    if (item !== "") {
        items.push(item); // Add item to array
        itemInput.value = "";
        displayItems(); // Refresh the list
    } else {
        alert("Please enter an item name.");
    }
});

// Update item using findIndex
updateBtn.addEventListener("click", () => {
    const searchItem = searchInput.value.trim();
    const newItem = updateInput.value.trim();

    if (searchItem === "" || newItem === "") {
        alert("Please enter both fields.");
        return;
    }

    // Find index of the item to update
    const index = items.findIndex(item => item.toLowerCase() === searchItem.toLowerCase());

    if (index !== -1) {
        items[index] = newItem; // Update item
        displayItems(); // Refresh list
        alert(`Item '${searchItem}' updated to '${newItem}'`);
        searchInput.value = "";
        updateInput.value = "";
    } else {
        alert(`Item '${searchItem}' not found!`);
    }
});

// Delete item using findIndex
deleteBtn.addEventListener("click", () => {
    const deleteItem = deleteInput.value.trim();
    if (deleteItem === "") {
        alert("Please enter item name to delete.");
        return;
    }

    // Find index of the item to delete
    const index = items.findIndex(item => item.toLowerCase() === deleteItem.toLowerCase());

    if (index !== -1) {
        items.splice(index, 1); // Remove item from array
        displayItems(); // Refresh list
        alert(`Item '${deleteItem}' deleted successfully!`);
        deleteInput.value = "";
    } else {
        alert(`Item '${deleteItem}' not found!`);
    }
});
