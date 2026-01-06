// Sample user database
const users = [
  { id: 1, name: "Alice", email: "alice@example.com", age: 25 },
  { id: 2, name: "Bob", email: "bob@example.com", age: 30 },
  { id: 3, name: "Charlie", email: "charlie@example.com", age: 20 },
  { id: 4, name: "David", email: "david@example.com", age: 35 },
  { id: 5, name: "Eva", email: "eva@example.com", age: 28 },
];

/**
 * Display user in UI
 */
function displayUser(user) {
  const results = document.getElementById('userResults');
  results.innerHTML = ''; // Clear previous results

  if (!user) {
    results.innerHTML = `<div class="alert alert-warning text-center">User not found!</div>`;
  } else {
    const card = document.createElement('div');
    card.className = 'user-card';
    card.innerHTML = `
      <h5>${user.name}</h5>
      <p><strong>ID:</strong> ${user.id}</p>
      <p><strong>Email:</strong> ${user.email}</p>
      <p><strong>Age:</strong> ${user.age}</p>
    `;
    results.appendChild(card);
  }
}

/**
 * Event listeners for search inputs
 */
document.getElementById('searchId').addEventListener('input', (e) => {
  const id = parseInt(e.target.value);
  if (id) {
    const user = users.find(u => u.id === id);
    displayUser(user);
  } else {
    document.getElementById('userResults').innerHTML = '';
  }
});

document.getElementById('searchEmail').addEventListener('input', (e) => {
  const email = e.target.value.trim();
  if (email) {
    const user = users.find(u => u.email.toLowerCase() === email.toLowerCase());
    displayUser(user);
  } else {
    document.getElementById('userResults').innerHTML = '';
  }
});

document.getElementById('searchAge').addEventListener('input', (e) => {
  const age = parseInt(e.target.value);
  if (age) {
    const user = users.find(u => u.age > age);
    displayUser(user);
  } else {
    document.getElementById('userResults').innerHTML = '';
  }
});
