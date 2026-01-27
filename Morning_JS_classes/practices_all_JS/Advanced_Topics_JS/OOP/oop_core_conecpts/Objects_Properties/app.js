// 1. What is an Object?

// An object is a collection of properties, and a property is a key-value pair.

// Key (Property name): string (or symbol) that identifies the property

// Value: any data type (number, string, array, function, another object, etc.)

// Think of an object as a real-world thing with attributes:

// Example: Object representing a person
const person = {
  name: "Waqar",    // Key: 'name', Value: "Waqar"
  age: 25,          // Key: 'age', Value: 25
  city: "Karachi"   // Key: 'city', Value: "Karachi"
};

// Access object properties
console.log(person.name); // Waqar
console.log(person.age);  // 25
console.log(person["city"]); // Karachi

// Notes:

// person.name → Dot notation

// person["city"] → Bracket notation (useful when property name is dynamic)


console.log("*****************************************************************");
// 2. Object with Different Types of Values
const car = {
  brand: "Tesla",             // String
  year: 2023,                 // Number
  isElectric: true,           // Boolean
  features: ["AutoPilot", "GPS", "Music System"], // Array
  owner: {                     // Nested Object
    name: "Ali",
    license: "12345"
  },
  start: function() {          // Function as a property (method)
    console.log(`${this.brand} is starting...`);
  }
};

// Accessing different types of properties
console.log(car.brand);          // Tesla
console.log(car.features[1]);    // GPS
console.log(car.owner.name);     // Ali
car.start();                     // Tesla is starting...

// Tips:

// Objects can hold any data type

// Functions inside objects are called methods


console.log("**********************************************************");

// 3. Adding Properties to Objects
const laptop = {
  brand: "Dell",
  ram: 8
};

// Add new property using dot notation
laptop.color = "Black";

// Add new property using bracket notation
laptop["processor"] = "Intel i7";

console.log(laptop);
// { brand: 'Dell', ram: 8, color: 'Black', processor: 'Intel i7' }
// Note: Objects are mutable, you can add/remove/change properties anytime

console.log("********************************************************************");
// 4. Updating Properties
const phone = {
  brand: "Samsung",
  storage: 64
};

// Update existing property
phone.storage = 128;

// Update using bracket notation
phone["brand"] = "Samsung Galaxy";

console.log(phone);
// { brand: 'Samsung Galaxy', storage: 128 }

console.log("**********************************************************");
// 5. Deleting Properties
const user = {
  username: "waqar123",
  password: "secret",
  email: "waqar@gmail.com"
};

// Delete password property
delete user.password;

console.log(user);
// { username: 'waqar123', email: 'waqar@gmail.com' }
// Tip: delete removes property but does not affect other properties


console.log("*******************************************************");
// 6. Checking if Property Exists
const book = {
  title: "JavaScript Guide",
  author: "MDN"
};

// Using 'in' keyword
console.log("title" in book);  // true
console.log("pages" in book);  // false

// Using undefined check
console.log(book.pages === undefined); // true

console.log("****************************************************************");
// 7. Looping Through Object Properties

const student = {
  name: "Ali",
  grade: "A",
  age: 12
};

// Using for...in loop
for (let key in student) {
  console.log(`${key}: ${student[key]}`);
}
// name: Ali
// grade: A
// age: 12

// ✅ Tip: for...in loops through keys of object
console.log("*********************************************************");

// 8. Object.keys(), Object.values(), Object.entries()

const city = {
  name: "Karachi",
  population: "15M",
  country: "Pakistan"
};

console.log(Object.keys(city));   // ['name', 'population', 'country']
console.log(Object.values(city)); // ['Karachi', '15M', 'Pakistan']
console.log(Object.entries(city)); // [['name','Karachi'], ['population','15M'], ['country','Pakistan']]


console.log("****************************************************************");
// 💡 Tips:

// Object.keys() → Array of property names

// Object.values() → Array of values

// Object.entries() → Array of [key, value] pairs


// 9. Dynamic Property Names
const propName = "age";

const person2 = {
  name: "Ali",
  [propName]: 20 // computed property name
};

console.log(person2.age); // 20
// ✅ Tip: Useful when property names are not known in advance


console.log("*********************************************************");
// 10. Methods Inside Objects
const calculator = {
  add: function(a, b) {
    return a + b;
  },
  subtract(a, b) {           // Shorter method syntax
    return a - b;
  }
};

console.log(calculator.add(5, 3));      // 8
console.log(calculator.subtract(10, 4));// 6


console.log("****************************************************");

// 11. Nested Objects & Accessing Them
const company = {
  name: "TechCorp",
  address: {
    city: "Islamabad",
    zip: 44000
  },
  employees: ["Ali", "Waqar", "Sara"]
};

console.log(company.address.city);   // Islamabad
console.log(company.employees[1]);   // Waqar

console.log("******************************************");
// 12. Object.assign() to Copy Objects

const original = {a: 1, b: 2};

// Create a copy
const copy = Object.assign({}, original);

// Change copy without affecting original
copy.b = 10;

console.log(original); // / {a:1, b:2}
console.log(copy); // {a:1, b:10}
// Tip: Direct assignment (let copy = original) does not create a new object; it references the same object

console.log("*********************************************");
// 13. Spread Operator to Copy / Merge Objects
const obj1 = {name: "Ali", age: 20};
const obj2 = {city: "Karachi", country: "Pakistan"};

// Merge using spread
const merged = {...obj1, ...obj2};
console.log(merged);
// { name: 'Ali', age: 20, city: 'Karachi', country: 'Pakistan' }


console.log("*********************************************************");
// 14. Freezing / Sealing Objects
const user2 = {username: "waqar", password: "1234"};
// Freeze object: cannot add, delete, or change properties
Object.freeze(user2);
// Object.seal(user2); // on it can be updated ad delete

user2.username = "Ali"; // ❌ Not allowed
user2.email = "test@gmail.com"; // ❌ Not allowed

console.log(user2); // {username: 'waqar', password: '1234'}


console.log("********************************************************");

const students = {
  name: "Waqar",
  grade: "A",
  subjects: ["Math", "English", "Science"],
  printInfo() { // Method
    console.log(`${this.name} has grade ${this.grade}`);
  },
  addSubject(subject) { // Add to array
    this.subjects.push(subject);
  }
};

students.printInfo();           // Waqar has grade A
students.addSubject("History"); // Add new subject
console.log(students.subjects); // ["Math","English","Science","History"]
