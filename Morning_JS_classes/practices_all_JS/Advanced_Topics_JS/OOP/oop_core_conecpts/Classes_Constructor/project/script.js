// =============================
// Employee Class Definition
// =============================

// Define a class named Employee
class Employee {
  
  // Constructor method: runs automatically when a new Employee object is created
  constructor(name, position, salary) {
    this.name = name;          // 'this.name' creates a property called 'name' on the object and assigns the value passed to constructor
    this.position = position;  // 'this.position' creates a property 'position' for the object and assigns the value
    this.salary = salary;      // 'this.salary' creates a property 'salary' and stores the salary value for the object
  }

  // Method to get formatted employee info
  getInfo() {
    // Template literal: returns a string combining object properties
    return `${this.name} - ${this.position} - $${this.salary}`;
  }

  // Method to raise the employee's salary
  raiseSalary(amount) {
    this.salary += amount;    // Add the 'amount' passed to the current salary (this.salary)
    return this.salary;       // Return the updated salary after addition
  }
}

// =============================
// Main Logic
// =============================

// Create an empty array to store all employee objects
const employees = [];

// Select the HTML form element with id 'employeeForm' and store it in a variable 'form'
const form = document.getElementById("employeeForm");

// Select the HTML container where employee cards will be displayed
const employeeList = document.getElementById("employeeList");

// Add an event listener to the form to handle the 'submit' event
form.addEventListener("submit", function(e) {
  e.preventDefault(); // Prevent the form from refreshing the page when submitted

  // Get the value from the input field with id 'name', remove extra spaces, and store it in 'name'
  const name = document.getElementById("name").value.trim();

  // Get the value from the input field with id 'position', trim spaces, and store it in 'position'
  const position = document.getElementById("position").value.trim();

  // Get the value from the input field with id 'salary', convert it to a Number, and store it in 'salary'
  const salary = Number(document.getElementById("salary").value);

  // Validation: Check if name or position is empty or salary is not a number or less than or equal to 0
  if (!name || !position || isNaN(salary) || salary <= 0) {
    alert("Please enter valid values!"); // Show alert if invalid
    return; // Stop the function from running further
  }

  // Create a new Employee object using the constructor and the values from the form
  const newEmployee = new Employee(name, position, salary);

  // Add the new Employee object to the 'employees' array
  employees.push(newEmployee);

  // Call the function to display all employees on the page
  displayEmployees();

  // Reset the form input fields to empty after submission
  form.reset();
});

// Function to display all employee objects as cards on the page
function displayEmployees() {
  employeeList.innerHTML = ""; // Clear the previous employee cards from the container

  // Loop through the 'employees' array using forEach
  employees.forEach((emp, index) => {
    // Create a new div element to act as a card
    const card = document.createElement("div");

    // Add the class 'employee-card' to the div for styling
    card.className = "employee-card";

    // Set the inner HTML of the card with employee info and buttons
    card.innerHTML = `
      <span>${emp.getInfo()}</span> <!-- Display employee info from getInfo() method -->
      <div>
        <button class="raise-btn" onclick="raiseSalary(${index})">
          <i class="fa-solid fa-arrow-up"></i> Raise
        </button>
        <button class="delete-btn" onclick="deleteEmployee(${index})">
          <i class="fa-solid fa-trash"></i> Delete
        </button>
      </div>
    `;

    // Append the card div to the employeeList container in HTML
    employeeList.appendChild(card);
  });
}

// Function to raise salary of a specific employee
function raiseSalary(index) {
  const amount = prompt("Enter raise amount:"); // Ask user for the amount to increase salary

  // Check if user entered a valid number
  if (amount && !isNaN(amount)) {
    employees[index].raiseSalary(Number(amount)); // Call the raiseSalary method on the selected employee
    displayEmployees(); // Refresh the employee list to show updated salary
  }
}

// Function to delete an employee
function deleteEmployee(index) {
  // Confirm with the user if they really want to delete the employee
  if (confirm(`Delete ${employees[index].name}?`)) {
    employees.splice(index, 1); // Remove the employee from the array at the given index
    displayEmployees();          // Refresh the display to remove the deleted employee card
  }
}
