// 1️⃣ Select DOM elements
const userIdInput = document.getElementById('userIdInput'); // Input for user ID
const scoreInput = document.getElementById('scoreInput');   // Input for score
const addUserBtn = document.getElementById('addUserBtn');   // Button to add/update
const userList = document.getElementById('userList');       // UL to display users
const userCount = document.getElementById('userCount');     // Span to show total users

// 2️⃣ Create a Map to store users
const users = new Map(); // Map stores unique userID as key, score as value

// 3️⃣ Function to update displayed list
function updateUserList() {
  userList.innerHTML = ''; // Clear existing list items

  users.forEach((score, userId) => { // Iterate through Map
    const li = document.createElement('li'); // Create list item
    li.textContent = `ID: ${userId}, Score: ${score}`; // Show user ID and score

    // Create delete button for each user
    const deleteBtn = document.createElement('button'); 
    deleteBtn.textContent = 'Remove';      // Button text
    deleteBtn.onclick = () => {            // On click, remove user
      users.delete(userId);                // Delete key from Map
      updateUserList();                    // Refresh list
    };

    li.appendChild(deleteBtn);             // Add button to list item
    userList.appendChild(li);              // Add list item to UL
  });

  userCount.textContent = users.size;      // Update total users
}

// 4️⃣ Add/update user on button click
addUserBtn.addEventListener('click', () => {
  const userId = userIdInput.value.trim();       // Get user ID
  const score = Number(scoreInput.value);        // Get score as number

  if (userId && !isNaN(score)) {                 // Validate inputs
    users.set(userId, score);                    // Add or update user in Map
    updateUserList();                            // Refresh displayed list
    userIdInput.value = '';                       // Clear input
    scoreInput.value = '';                        // Clear input
  } else {
    alert('Please enter valid User ID and Score'); // Alert for invalid inputs
  }
});

// 5️⃣ Optional: Add user on Enter key for convenience
[userIdInput, scoreInput].forEach(input => {
  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {                     // If Enter key pressed
      addUserBtn.click();                        // Trigger add/update button
    }
  });
});
