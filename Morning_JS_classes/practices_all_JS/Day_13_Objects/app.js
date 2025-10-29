// 70. OBJECTS: PROPERTIES

// Objects store information in key–value pairs, like how a real person has a name, age, etc.

// 🧩 Example 1 — Basic Person Object

// A simple person object with properties
var person = {
    name: "Waqar", //Property 1: Name of the person
    age: 19,// Property 2: Age of the person
    city: "Karachi" // Property 3: City where person lives
};

console.log(person.name); // output: Waqar
console.log("the age is: "+person["age"] + " years old."); // output: 25


// 🧩 Example 2 — Accessing Properties Dynamically
var car = {
    brand: "Toyota",
    model: "Corolla"
};

var key = "brand";
console.log(car[key]); // Output: Toyota (bracket notation used dynamically)


// 🧩 Example 3 — Adding New Properties Later
var laptop = {
    brand: "Dell"
};
laptop.price = 50000; // Adding new property dynamically
console.log(laptop); // Now laptop has both brand & price


// 🧩 Example 4 — Deleting a Property
var book = {
    title: "JavaScript Mastery",
    pages: 350
};

delete book.pages; // Removes the 'pages' property
console.log(book);   // Output: { title: "JavaScript Mastery" }


// 🧩 Example 5 — Looping Over Properties (for...in)
var fruits = {
    name: "Apple",
    color: "Red",
    price: 150
};

for (var key in fruits){
    console.log(key + " : " + fruits[key]);
}

console.log("*******************************************");


// 71. OBJECTS: METHODS

// Methods are functions inside objects, used to perform actions related to that object.

// 🧩 Example 1 — Simple Method

var person = {
    name: "Ali",
    greet: function(){
        console.log("Hello, my name is " + this.name);
    }
};

person.greet(); // Output: Hello, my name is Ali


// 🧩 Example 2 — Method That Takes Parameters
var calculator = {
    add: function(a, b){
        return a + b
    }
};

console.log(calculator.add(5, 5)); // output: 10


// 🧩 Example 3 — Method Using this
var user = {
    name: "Waqar",
    age: 20,
    showDetails: function(){
        console.log(`${this.name} is ${this.age} years old.`);
    }
};

user.showDetails() //// Output: Waqar is 20 years old.


// 🧩 Example 4 — Real-Life Example (Bank Account)
var bankAccount = {
    balance: 5000,
    deposit: function(amount) {
        this.balance += amount;
        console.log(`Deposited ${amount}. New balance: ${this.balance}`);
    }
};

bankAccount.deposit(2000); // Output: Deposited 2000. New balance: 7000

console.log("**********************************");

// 🧩 Example 5 — Method Returning a Value
var students = {
    marks: [80, 90, 70],
    totalMarks: function(){
        var sum = 0
        for(var m of this.marks) 
            sum += m;
        return sum;
    }
};

console.log(students.totalMarks()); // output: 240




console.log("*************************************");

// 72. OBJECTS: CONSTRUCTORS

// Constructors are blueprints for creating multiple similar objects.

// 🧩 Example 1 — Basic Constructor Function
function Car(brand, model){
    this.brand = brand;
    this.model = model
}

var car1 = new Car("Toyota", "Corolla");
console.log(car1.brand); // Toyota


// 🧩 Example 2 — Multiple Instances
function Student(name, age){
    this.name = name;
    this.age = age
}

var s1 = new Student("Ali", 20)
var s2 = new Student("Khan", 22)

console.log(s1.name, s2["name"]); // Ali Khan


// 🧩 Example 3 — Constructor with Method
function Person(name, city){
    this.name = name;
    this.city = city;
    this.greet = function(){
        console.log(`Hi, I am ${this.name} from ${this.city}.`);
    };
}

var p1 = new Person("Waqar Ali", "Karachi");
p1.greet(); // Output: Hi, I’m Waqar from Karachi.


// 🧩 Example 4 — Adding Property Later
function Mobile(brand, price){
    this.brand = brand;
    this.price = price
}

var m1 = new Mobile("Samsung", 90000);
m1.color = "Black"; // Add property later
console.log(m1); // Mobile { brand: 'Samsung', price: 90000, color: 'Black' }


// 🧩 Example 5 — Constructor for Employee
function Employee(name, salary) {
  this.name = name;
  this.salary = salary;
  this.getAnnualSalary = function() {
    return this.salary * 12;
  };
}

var e1 = new Employee("Hassan", 50000);
console.log(e1.getAnnualSalary()); // Output: 600000


console.log("***************************************");

// 73. OBJECTS: CONSTRUCTORS FOR METHODS

// We can separate method definitions from object creation using prototypes or shared methods.

// 🧩 Example 1 — Shared Method Across All Objects
function Student(name, grade){
    this.name = name;
    this.grade = grade ;
}

Student.prototype.showGrade = function(){
    console.log(`${this.name} got grade ${this.grade}`);
};

var s1 = new Student("Ali", "A")
s1.showGrade(); // Output: Ali got grade A


// 🧩 Example 2 — Add Method Later
function Animal(name){
    this.name = name;
}

Animal.prototype.speak = function(){
    console.log(`${this.name} makes a sound.`);    
};

var dog = new Animal("Dog");
dog.speak()  // Output: Dog makes a sound.


// 🧩 Example 3 — Multiple Methods via Prototype
function Book(title, author){
    this.title = title
    this.author = author
}

Book.prototype.getSummary = function(){
    return `${this.title} by ${this.author}`
};

Book.prototype.changeTitle = function(newTitle){
    this.title = newTitle
};

var b1 = new Book("JS Basics", "Waqar");
console.log(b1.getSummary());
b1.changeTitle("Advanced JS")
console.log(b1.getSummary());



// 🧩 Example 4 — Real-Life Example (Bank)
function Account(owner, balance){
    this.owner = owner;
    this.balance = balance;
}

Account.prototype.deposit = function(amount){
    this.balance += amount;
    console.log(`Deposit ${amount}. New Balance: ${this.balance}`);
};

var acc1 = new Account("Ali", 1000);
acc1.deposit(500); // Output: Deposit 500, New Balance: 1500

// 🧩 Example 5 — Constructor + Shared Method
function Movie(name, rating){
    this.name = name
    this.rating = rating
}

Movie.prototype.info = function(){
    console.log(`${this.name} is rated ${this.rating}/10`);
};

var m1 = new Movie("Inception", 9);
m1.info();

console.log("************************************");

// 74. OBJECTS: PROTOTYPES

// Every JS object has a hidden property __proto__ that links to its prototype — used for inheritance.



// 🧩 Example 1 — Basic Prototype Chain
var animal = {eats: true};
var dog = Object.create(animal);
dog.barks = true;

console.log(dog.eats); // true (inherited)


// 🧩 Example 2 — Prototype Inheritance
function Vehicle(){
    this.hasEngine = true;
}

function Car(){
    this.wheels = 4
}

Car.prototype = new Vehicle();

var c = new Car();
console.log(c.hasEngine); // true

// 🧩 Example 3 — Custom Prototype Object
var baseHuman = {species: "Homo sapiens"};
var waqar = Object.create(baseHuman);
waqar.name = "Waqar";

console.log(waqar.species); // Homo sapiens (from prototype)


// 🧩 Example 4 — Adding to Prototype Chain
function Animal(name){
    this.name = name;
}

Animal.prototype.walk = function(){
    console.log(this.name + " is walking...");
};

var cat = new Animal("kitty");
cat.walk(); // Output: kitty is walking

// 🧩 Example 5 — Prototype Check
var arr = [];
console.log(Array.prototype.isPrototypeOf(arr)); // true


console.log("***************************************");


// 75. OBJECTS: CHECKING FOR PROPERTIES & METHODS

// We often check if an object has a property or method before using it.
// 🧩 Example 1 — Using 'in' Operator
var car = {brand: "Toyota"};
console.log('brand' in car); // true
console.log('color' in car); // false


// 🧩 Example 2 — Using hasOwnProperty()
var user = {
    name: "Ali"
}
console.log(user.hasOwnProperty('name')); // true


// 🧩 Example 3 — Check for Method
var calculator = {
    add: function(a, b){return a + b}
};

if("add" in calculator){
    console.log("Add method exists!");
    
}


// 🧩 Example 4 — Safely Use Optional Properties
var product = {
    name: "Laptop"
};
if(product.price){
    console.log(product.price);
} else{
    console.log("Price not set yet");
    
}



// 🧩 Example 5 — Real-Life Example (Check Bank Balance Function)
var account = {
  balance: 2000,
  showBalance: function() { console.log(this.balance); }
};

if (typeof account.showBalance === "function") {
  account.showBalance();
}
