/*

1. What is a Class?

A class is a blueprint for creating objects.
Think of it like a cookie mold: you can make many cookies (objects) from the same mold (class).

2. What is a Constructor?

A constructor is a special method inside a class that runs automatically when an object is created.
It’s used to initialize properties of the object.
*/

// 3. Basic Class & Constructor Example
// define a class
class Person {
    // Constructor method runs automatically when object is created
    constructor (name, age){
        this.name = name; // Property 'name' of object
        this.age = age; // Property 'age' of object
    }

    // Method to display person's info
    info(){
        console.log(`Name: ${this.name}, Age: ${this.age}`);
        
    }
}


// Create objects from the class
const person1 = new Person("Waqar", 19);
const person2 = new Person("Ali", 29);


person1.info(); // Name: Waqar, Age: 19
person2.info(); // Name: Ali, Age: 29


// constructor() is called automatically when new Person() is created.

// this refers to the current object.

console.log("*******************************************************");
// 4. Constructor with Default Values
class Car {
    constructor (brand = "Unknown", model = "Unknown"){
        this.brand = brand;
        this.model = model;
    }

    showDetails(){
        console.log(`Car: ${this.brand}, Model: ${this.model}`);
    }
}

const car1 = new Car("Tesla", "Model S")
const car2 = new Car() // Uses default values

car1.showDetails(); // Car: Tesla, Model: Model S
car2.showDetails(); // Car: Unknown, Model: Unknown
// 💡 Tip: Default values help avoid undefined when arguments are missing.

console.log("**************************************************************");
// 5. Multiple Methods in Class
class Laptop {
    constructor(brand, ram){
        this.brand = brand;
        this.ram = ram;
    }

    info(){
        console.log(`${this.brand} Laptop with ${this.ram}GB RAM`);
    }

    upgrade(newRam){
        this.ram = newRam;
    console.log(`Upgraded RAM to ${this.ram}GB`);        
    }
}

const laptop = new Laptop("Dell", 8);

laptop.info();      // Dell Laptop with 8GB RAM
laptop.upgrade(16); // Upgraded RAM to 16GB
laptop.info();      // Dell Laptop with 16GB RAM
// ✅ Takeaway: Methods inside classes can read and modify object properties.

console.log("***************************************************");
// 6. Constructor Running Extra Logic

// You can do calculations or validations inside constructors.

class BankAccount{
    constructor(owner, balance){
        this.owner = owner;
        // Ensure balance is not negative
        this.balance = balance >= 0 ? balance : 0;
    }

    deposit(amount){
        this.balance += amount
        console.log(`Deposited ${amount}. Balance: ${this.balance}`);
    }

    withdraw(amount){
        if(amount <= this.balance){
            this.balance -= amount;
            console.log(`Withdrew ${amount}. Balance: ${this.balance}`);
        } else {
            console.log("Insufficient balance!");
        }
    }
}

const account = new BankAccount("Waqar", 1000)
account.deposit(500); // Deposited 500, balance: 1500
account.withdraw(2000); // Insufficient balance

// 💡 Tip: Constructor is not only for setting values—it can run logic, validations, and prepare the object.

console.log("***************************************************************************");

// 7. Constructor with Object as Argument
class Student {
    constructor({name, grade, age}) {
        this.name = name
        this.grade = grade
        this.age = age
    }

    display(){
        console.log(`${this.name}, Grade: ${this.grade}, Age: ${this.age}`);
    }
}

const studentData = {name: "Ali", garde: "A", age: 12}
const student = new Student(studentData);
student.display() // Ali, Garde: A, Age: 12

// Using an object as an argument is clean when many properties exist.

// No need to remember the order of parameters.


console.log("******************************************************");

// 8. Static Properties & Methods

// Static methods belong to the class itself, not objects.

// Useful for helper functions

class MathHelper {
  static square(x) {
    return x * x;
  }

  static cube(x) {
    return x * x * x;
  }
}

console.log(MathHelper.square(5)); // 25
console.log(MathHelper.cube(3));   // 27
// Tip:

// Static methods: ClassName.method()

// Regular methods: object.method()

// . Constructor Tricks for Learning

// constructor() always runs first when object is created.

// this inside constructor points to the current object.

// You can add default values, validations, and calculations.

// Objects created from the same class share the same structure.


console.log("*****************************************************");

// 10. Complete Example with Everything Together
class Employee {
    //  constructor to initialize properties 
    constructor(name, position, salary = 3000){
        this.name = name;
        this.position = position;
        this.salary = salary >= 0 ? salary : 0; // validation
    }

    // Display employee info
    displayInfo(){
        console.log(
            `Employee: ${this.name}, Position: ${this.position}, Salary: $${this.salary}`
        );
    }

    // Raise salary
    raise(amount){
        this.salary += amount
        console.log(`${this.name}'s salary increased to $${this.salary}`);
    }

    // Static helper method
    static companyPolicy(){
        console.log("All employees must adhere to company rules.");
    }
}

const emp1 = new Employee("Waqar", "Developer", 50000);
const emp2 = new Employee("Ali", "Designer")

emp1.displayInfo(); // Employee: Waqar, Postion: Developer, Salary: $50000
emp2.displayInfo(); // Employee: Ali, Postion: Designer, Salary: $30000


emp1.raise(5000); // Waqar's salary increased to $55000
// emp1.raise(70000); // Waqar's salary increased to $55000

Employee.companyPolicy(); // All employees must adhere to company rules.
