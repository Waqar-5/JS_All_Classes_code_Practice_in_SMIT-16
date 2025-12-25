/************************************************
 SMART USER DASHBOARD
 Demonstrates REAL-LIFE forEach() usage
************************************************/

const users = [
  { name: "Ali", active: true, logins: 14 },
  { name: "Sara", active: false, logins: 3 },
  { name: "Ahmed", active: true, logins: 22 },
  { name: "Zara", active: true, logins: 4 },
  { name: "Usman", active: false, logins: 1 }
];

// DOM references
const totalUsersEl = document.getElementById("totalUsers");
const activeUsersEl = document.getElementById("activeUsers");
const totalLoginsEl = document.getElementById("totalLogins");
const usersEl = document.getElementById("users");
const alertsEl = document.getElementById("alerts");

// External state (SIDE EFFECTS)
let activeUsers = 0;
let totalLogins = 0;

// 🔥 forEach in REAL LIFE
users.forEach((user) => {

  // Update totals
  totalLogins += user.logins;
  if (user.active) activeUsers++;

  // Create user card
  const card = document.createElement("div");
  card.className = "user";

  card.innerHTML = `
    <h3>${user.name}</h3>
    <p>Logins: ${user.logins}</p>
    <span class="status ${user.active ? "active" : "inactive"}">
      ${user.active ? "Active" : "Inactive"}
    </span>
  `;

  usersEl.appendChild(card);

  // Alert logic (side effect)
  if (user.logins < 5) {
    const alert = document.createElement("div");
    alert.textContent = `⚠ ${user.name} has very low activity`;
    alertsEl.appendChild(alert);
  }

  // Mutating object (real use)
  user.lastChecked = new Date().toLocaleString();
});

// Update stats UI
totalUsersEl.textContent = users.length;
activeUsersEl.textContent = activeUsers;
totalLoginsEl.textContent = totalLogins;
