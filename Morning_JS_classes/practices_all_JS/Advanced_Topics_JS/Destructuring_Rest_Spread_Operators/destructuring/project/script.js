// Initial users array
let users = [
  {
    id: 1,
    name: "Ali",
    age: 25,
    email: "ali@gmail.com",
    hobbies: ["coding", "gaming", "reading"],
    address: { city: "Karachi", country: "Pakistan" }
  },
  {
    id: 2,
    name: "Waqar",
    age: 22,
    email: "waqar@gmail.com",
    hobbies: ["drawing", "football"],
    address: { city: "Lahore", country: "Pakistan" }
  }
];

const userContainer = document.getElementById("userContainer");
const userForm = document.getElementById("userForm");

// Render all user cards
function renderUsers(userArray) {
  userContainer.innerHTML = "";

  userArray.forEach(user => {
    // Object destructuring with defaults
    const { id, name, age = "N/A", email, hobbies = [], address: { city = "Unknown", country = "Unknown" } = {} } = user;

    // Array destructuring for hobbies
    const [firstHobby = "None", secondHobby = "None"] = hobbies;

    // Create card
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <h2>${name} (${age})</h2>
      <p>Email: ${email}</p>
      <p>City: ${city}, Country: ${country}</p>
      <p>Hobbies: ${firstHobby}, ${secondHobby}</p>
      <button onclick="updateAge(${id})">Increase Age +1</button>
      <button onclick="addHobby(${id})">Add Hobby</button>
    `;

    userContainer.appendChild(card);
  });
}

// Update age using spread operator
function updateAge(userId) {
  users = users.map(user => user.id === userId ? { ...user, age: (user.age || 0) + 1 } : user);
  renderUsers(users);
}

// Prompt to add a hobby
function addHobby(userId) {
  const hobby = prompt("Enter new hobby:");
  if(!hobby) return;

  users = users.map(user => 
    user.id === userId ? { ...user, hobbies: [...user.hobbies, hobby] } : user
  );

  renderUsers(users);
}

// Add new user from form
userForm.addEventListener("submit", e => {
  e.preventDefault();
  
  // Object destructuring from form elements
  const { name, age, email, city, country, hobbies } = Object.fromEntries(new FormData(userForm).entries());

  // Spread operator + array destructuring for hobbies
  const newUser = {
    id: Date.now(),
    name,
    age: Number(age) || 0,
    email,
    hobbies: hobbies ? hobbies.split(",").map(h => h.trim()) : [],
    address: { city, country }
  };

  users = [...users, newUser]; // Spread to add new user
  renderUsers(users);
  userForm.reset();
});

// Initial render
renderUsers(users);
